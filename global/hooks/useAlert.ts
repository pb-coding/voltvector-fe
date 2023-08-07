import { useContext } from "react";

import { AlertContext } from "@/global/error/AlertProvider";

export const useAlert = () => useContext(AlertContext);
