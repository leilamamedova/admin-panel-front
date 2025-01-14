export interface IGamesItems {
  id: number;
  sponsorId: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  sponsor: string;
  isCurrentWeek: boolean;
}

export interface IGames {
  count: number;
  response: {
    items: IGamesItems[] | any;
  };
}

export interface IGame {
  response: {
    items: IGamesItems;
  };
}

export interface ISponsor {
  id: number;
  name: string;
  logoPath: string;
  siteUrl: string;
  description: string;
}

export interface gameProps {
  startDate: string;
  endDate: string;
  sponsorId: number;
}
