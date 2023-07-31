// TODO: implement roles in FE and BE
// roles?: string[];

export type UserAuthStateType = {
  id?: number;
  name?: string;
  email?: string;
  roles?: RoleType[];
  accessToken?: string;
};

export type UserAuthContextType = {
  userAuth: UserAuthStateType;
  setUserAuth: (auth: UserAuthStateType) => void;
};

export type RoleType = {
  id: number;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
  userId: number;
};
