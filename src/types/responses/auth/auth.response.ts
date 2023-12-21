export interface ILoginData {
  message: string;
  token: Token;
}

export interface Token {
  refreshToken: string;
  accessToken: string;
}
