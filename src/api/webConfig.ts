const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const defaultRoute = SERVER_URL + "/api";
export const AuthServerUrl = defaultRoute + "/Auth";

const webConfig = {
  auth: {
    login: "/login",
    refreshToken: "/refresh-token",
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
  reports: {
    // USER ACTIVITY
    getUserActivity: "/UserActivityStats",
    exportUserActivity: "/UserActivityStats/export",
    // WINNER
    getWinner: "/WinnerStats",
    exportWinner: "/WinnerStats/export",
  },
};

export default webConfig;
