// USER ACTIVITY
export interface IUserActivityItems {
  id?: number;
  playerId: number;
  message: string;
  activityType?: number;
  activityTypeString: string;
  createdAt: string;
}

export interface IUserActivity {
  count: number;
  response: {
    items: IUserActivityItems[] | any;
  };
}

// WINNER
export interface IWinnerItems {
  id?: number;
  prizeId: number;
  weekId: number;
  userId: number;
  userName: string;
  rank: number;
  prizeName: string;
}

export interface IWinner {
  count: number;
  response: {
    items: IWinnerItems[] | any;
  };
}
