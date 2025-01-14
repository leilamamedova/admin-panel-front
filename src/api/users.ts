import { IUsers } from "api/interfaces/users";
import webConfig, { defaultRoute } from "api/webConfig";
import axios from "networking/axios";

// GET
export const getUsers = (
  page: number,
  limit: number,
  phoneNumber: string,
  name: string,
  email: string,
): Promise<IUsers> =>
  axios
    .get(
      defaultRoute +
        webConfig.users.getUsers +
        `?page=${page}&limit=${limit}&phoneNumber=${phoneNumber}&name=${name}&email=${email}`,
    )
    .then((response) => response && response.data);

// PUT
export const toggleUserActivation = (
  id: number,
  isActive: boolean,
): Promise<boolean> => {
  const body = {
    isActive,
  };

  return axios
    .put(defaultRoute + webConfig.users.toggleUserActivation(id), body)
    .then((response) => (response && response.data ? true : false));
};
