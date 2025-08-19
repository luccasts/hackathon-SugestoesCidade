import { useState, useEffect, useMemo, useContext } from "react";

import type { AuthType, AuthProviderProps } from "./types";

import { sugeCityService } from "../../api/sugeCityService";
import { AuthContext } from "./auth";
import { axiosInstance } from "../../api/sugeCityInstance";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthType>({
    user: null,
    token: null,
  });

  useEffect(() => {
    async function loadUser() {
      const access = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");

      if (access && refresh) {
        try {
          axiosInstance.defaults.headers.common["Authorization"] =
            `Bearer ${access}`;
          const userRes = await sugeCityService.getUserData(access);
          setAuthenticatedUser({
            user: userRes?.data,
            token: access,
          });
        } catch (error) {
          console.error("Erro ao carregar usuário:", error);
          localStorage.clear();
          setAuthenticatedUser({ user: null, token: null });
        }
      }
    }
    loadUser();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await sugeCityService.getToken(username, password);

      if (res?.data) {
        const { access, refresh } = res.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${access}`;
        const userRes = await sugeCityService.getUserData(access);

        setAuthenticatedUser({
          user: userRes?.data,
          token: access,
        });
        console.log(authenticatedUser, "dentro do if");
      }
      console.log(authenticatedUser, "fora do if");
    } catch (error) {
      console.error("Erro no login: ", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAuthenticatedUser({ user: null, token: null });
  };

  const contextValue = useMemo(
    () => ({ login, logout, authenticatedUser }),
    [authenticatedUser],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("UseAtuh deve ser usado dentro do AuthProvider");
  }
  return context;
};
