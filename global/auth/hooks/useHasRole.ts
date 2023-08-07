import { RoleType } from "../types";
import { useUser } from "./useUser";

export const useHasRole = (role: RoleType) => {
  const { userData } = useUser();
  const hasRole = userData?.roles?.some(
    (roleObject) => roleObject.role === role
  );

  return hasRole;
};
