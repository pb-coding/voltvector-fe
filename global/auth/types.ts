// TODO: implement roles in FE and BE
// roles?: string[];
export type AuthStateType = {
  accessToken?: string;
  roles?: string[];
  user?: string;
};

export type AuthContextType = {
  auth: AuthStateType;
  setAuth: (auth: AuthStateType) => void;
};
