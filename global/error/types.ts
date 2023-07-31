export type ErrorStateType = {
  message: string | null;
  status: number | null;
  active: boolean;
};

export type ErrorContextType = {
  errorAlert?: ErrorStateType;
  setErrorAlert: (error: ErrorStateType) => void;
};
