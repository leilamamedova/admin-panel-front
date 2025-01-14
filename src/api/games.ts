import {
  IGame,
  IGames,
  IGamesItems,
  ISponsor,
  gameProps,
} from "api/interfaces/games";
import webConfig, { defaultRoute } from "api/webConfig";
import axios from "networking/axios";

// GET
export const getGames = (
  page: number,
  limit: number,
  startDate: string,
  endDate: string,
  isCurrent: boolean,
): Promise<IGames> =>
  axios
    .get(
      defaultRoute +
        webConfig.games.getGames +
        `?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}&isCurrent=${isCurrent}`,
    )
    .then((response) => response && response.data);

export const getSponsors = (): Promise<ISponsor[]> =>
  axios
    .get(defaultRoute + webConfig.games.getSponsors)
    .then((response) => response && response.data.response.items);

// POST
export const createGame = (body: gameProps): Promise<IGame> =>
  axios
    .post(defaultRoute + webConfig.games.createGames, body)
    .then((response) => response && response.data);

// PUT
export const updateGame = (body: gameProps, id: number): Promise<IGamesItems> =>
  axios
    .put(defaultRoute + webConfig.games.updateGames(id), body)
    .then((response) => response && response.data.response);
