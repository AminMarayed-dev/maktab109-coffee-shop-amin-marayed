export type userDataLogin = {
  username: string;
  password: string;
};

export type User = {
  firstname: string;
  lastname: string;
  createdAt: string;
  password: string;
  address: string;
  phoneNumber: string;
  refreshToken: string;
  role: string;
  username: string;
};

export type Token = {
  refreshToken: string;
  accessToken: string;
};
