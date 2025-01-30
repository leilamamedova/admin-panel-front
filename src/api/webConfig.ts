const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const defaultRoute = SERVER_URL + "/api";

const webConfig = {
  auth: {
    login: "/login",
  },
  users: {
    getUsers: "/users",
    toggleUserActivation: (id: number) => `/users/${id}/activation-status`,
  },
  games: {
    getGames: "/games",
    getSponsors: "/sponsors",
    createGames: "/games",
    updateGames: (id: number) => `/games/${id}`,
  },
};

export default webConfig;
