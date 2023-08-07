export type AlertStateType = {
  message: string | null;
  status: number | null;
  error: boolean;
};

export type AlertContextType = {
  alert?: AlertStateType | null;
  setAlert: (alert: AlertStateType | null) => void;
};
