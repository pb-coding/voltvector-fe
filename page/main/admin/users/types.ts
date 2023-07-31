import { RoleType } from "@/global/auth/types";

export type UserType = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  roles: RoleType[];
};
