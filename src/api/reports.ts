import webConfig, { defaultRoute } from "api/webConfig";
import axios from "networking/axios";

import { IUserActivity, IWinner } from "./interfaces/reports";

// USER ACTIVITY
// GET
export const getUserActivity = (
  page: number,
  limit: number,
  playerId: number,
  activityTypes: string,
): Promise<IUserActivity> =>
  axios
    .get(
      defaultRoute +
        webConfig.reports.getUserActivity +
        `?Page=${page}&Limit=${limit}&PlayerId=${playerId}&ActivityTypes=${activityTypes}`,
    )
    .then((response) => response && response.data.result);

// WINNER
// GET
export const getWinner = (
  page: number,
  limit: number,
  userId: number,
  weekId: number,
  rank: number,
  prizeId: number,
): Promise<IWinner> =>
  axios
    .get(
      defaultRoute +
        webConfig.reports.getWinner +
        `?Page=${page}&Limit=${limit}&UserId=${userId}&WeekId=${weekId}&Rank=${rank}&PrizeId=${prizeId}`,
    )
    .then((response) => response && response.data.result);
