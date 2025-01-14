export interface IUsersItems {
  coins: number;
  dateOfBirth: string;
  email: string;
  id: number;
  imagePath: any;
  name: string;
  phoneNumber: string;
  isActive: boolean;
}

export interface IUsers {
  count: number;
  response: {
    items: IUsersItems[];
  };
}
