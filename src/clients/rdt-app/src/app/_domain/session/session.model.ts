export interface SessionToken {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  token_type: string;
}

export interface Session {
  token: SessionToken;
  rememberMe: boolean;
}