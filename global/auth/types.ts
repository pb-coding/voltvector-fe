// TODO: implement roles in FE and BE
// roles?: string[];

export type AuthContextType = {
  accessToken?: string | null;
  setAccessToken: (accessToken: string | null) => void;
};

export type UserDataStateType = {
  id: number;
  name: string;
  email: string;
  roles: RoleObjectType[];
};

export type UserContextType = {
  userData?: UserDataStateType | null;
  setUserData: (userData: UserDataStateType | null) => void;
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
