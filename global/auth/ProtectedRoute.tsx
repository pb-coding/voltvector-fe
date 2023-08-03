"use client";

import { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserAuth } from "@/global/auth/hooks/useUser";
import Forbidden from "@/global/auth/Forbidden";
import { RoleType } from "@/global/auth/types";
import { useRefreshToken } from "./hooks/useRefreshToken";

type ProtectedRouteProps = {
  roles: RoleType[];
  children: ReactNode;
};

/**
 * This component is used to protect routes from unauthorized users.
 * Currently, the user must have at least one role match to access the route.
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ roles, children }) => {
  const { userAuth } = useUserAuth();
  const refresh = useRefreshToken();
  const router = useRouter();

  useEffect(() => {
    const checkUserAuth = async () => {
      if (!userAuth.roles) {
        await refresh();
        if (!userAuth.roles) router.push("/login");
      }
    };

    checkUserAuth();
  }, [userAuth, refresh, router]);

  console.log("userAuth", userAuth);

  if (
    !userAuth.roles?.some((requiredRole) =>
      userAuth.roles?.includes(requiredRole)
    )
  ) {
    return <Forbidden />;
  }
  return children;
};

export default ProtectedRoute;
