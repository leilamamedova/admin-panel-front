import axios from "axios";

import { logOut } from "components/auth/AuthBox";

// Create an axios instance with the base URL
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 600000,
});

// **Request Interceptor** to attach the token to every request
instance.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

// You can handle the response errors globally here
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logOut();
    }
    return Promise.reject(error);
  },
);

export default instance;
