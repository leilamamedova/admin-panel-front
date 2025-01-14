import axios from "axios";
import Notification from "notifications/Notification";

import webConfig, { AuthServerUrl } from "api/webConfig";
import { logOut } from "components/auth/AuthBox";

const baseURL = process.env.REACT_APP_SERVER_URL;
const headers = {
  "Content-Type": "application/json",
};

const errorStatusCodes = [401, 403, 404, 409, 500, 502, 503];

const validateStatus = (status): boolean => {
  if (errorStatusCodes.includes(status)) {
    return false;
  }

  return true;
};

const getTokenWhenTokenIsExpired = async (): Promise<void> => {
  try {
    const response = await axios.post(
      AuthServerUrl + webConfig.auth.refreshToken,
      {
        refreshToken: localStorage.getItem("refresh_token"),
      },
    );

    localStorage.setItem("token", response.data.token);
    localStorage.setItem(
      "refresh_token_expiry_time",
      response.data.refreshTokenExpiryTime,
    );

    return axios(response.config);
  } catch (error) {
    logOut();
    Notification.warning("Session expired");

    return Promise.resolve(error);
  }
};

const instance = axios.create({
  baseURL,
  headers,
  timeout: 600000,
  validateStatus,
});

instance.interceptors.request.use(
  async (request) => {
    request.headers["Authorization"] = `Bearer ${await localStorage.getItem(
      "token",
    )}`;

    const refreshTokenExpiryTime = localStorage.getItem(
      "refresh_token_expiry_time",
    );
    const expiryDate = new Date(refreshTokenExpiryTime);
    const currentDate = new Date();

    if (refreshTokenExpiryTime && expiryDate < currentDate) {
      getTokenWhenTokenIsExpired();
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response.data?.isError) {
      Notification.error(response.data?.responseException?.exceptionMessage);
    }

    if (response.status === 400) {
      Notification.error(
        response.data?.responseException?.exceptionMessage?.title,
      );
    }

    return response;
  },
  async (error) => {
    const { response } = error;

    if (response && response.status === 401) {
      getTokenWhenTokenIsExpired();
    } else {
      if (response) {
        Notification.error(response.data?.responseException?.exceptionMessage);
      }
      return false;
    }
  },
);

export default instance;
