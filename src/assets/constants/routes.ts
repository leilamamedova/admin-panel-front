export const routes = {
  index: "/",
  users: "/users",
  games: "/games",
  gameConfig: {
    sponsors: "/gameConfig/sponsors",
    prizes: "/gameConfig/prizes",
    general: "/gameConfig/general",
  },
  words: "/words",
  reports: {
    userActivity: "/reports/user-activity",
    game: "/reports/game",
    winner: "/reports/winner",
  },
};

export const allowedRoutes = {
  login: "/login",
  changePassword: "/change-password",
  forgotPassword: "/forgot-password",
  resetPassword: "/resetPassword",
  alreadyAuthorized: "/alreadyauthorized",
};
