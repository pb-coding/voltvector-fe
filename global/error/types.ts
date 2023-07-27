export type ErrorStateType = {
  message: string | null;
  status: number | null;
  active: boolean;
};

export type ErrorContextType = {
  error?: ErrorStateType;
  setError: (error: ErrorStateType) => void;
};
