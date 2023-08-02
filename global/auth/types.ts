// TODO: implement roles in FE and BE
// roles?: string[];

export type UserAuthStateType = {
  id?: number;
  name?: string;
  email?: string;
  roles?: RoleObjectType[];
  accessToken?: string;
};

export type UserAuthContextType = {
  userAuth: UserAuthStateType;
  setUserAuth: (auth: UserAuthStateType) => void;
};

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type RoleType = Role.ADMIN | Role.USER;

export type RoleObjectType = {
  id: number;
  role: RoleType;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
};
