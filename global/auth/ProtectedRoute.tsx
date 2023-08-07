"use client";

import { FC, ReactNode } from "react";

import { useHasRole } from "@/global/auth/hooks/useHasRole";
import Forbidden from "@/global/auth/Forbidden";
import { RoleType } from "@/global/auth/types";
import LockSpinner from "../loading/LockSpinner";

type ProtectedRouteProps = {
  role: RoleType;
  children: ReactNode;
};

/**
 * This component is used to protect routes from unauthorized users.
 * Currently, the user must have the role to access the route.
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ role, children }) => {
  const hasRequiredRole = useHasRole(role);

  if (hasRequiredRole === undefined) return <LockSpinner />;
  if (hasRequiredRole === false) return <Forbidden />;

  return children;
};

export default ProtectedRoute;
