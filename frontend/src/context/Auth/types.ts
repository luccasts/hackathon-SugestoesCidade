import type { ReactNode } from "react";
type User = {
  id: number;
  name: string;
  email: string;
};
export type AuthType = {
  user: User | null;
  token: string | null;
};
export type AuthContextType = {
  authenticatedUser: AuthType;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};
export type AuthProviderProps = {
  children: ReactNode;
};
