import axios from "axios";
import { axiosInstance } from "./sugeCityInstance";

export const sugeCityService = {
  getAllPosts: async () => {
    try {
      const res = await axiosInstance.get("api/postagens/");
      return res;
    } catch (erro) {
      console.error(erro);
    }
  },

  createPost: async (titulo: string, descricao: string) => {
    try {
      const res = await axiosInstance.post("api/postagens/criar/", {
        titulo: titulo,
        descricao: descricao,
      });
      return res;
    } catch (erro) {
      console.error(erro);
    }
  },
  registerUser: async (username: string, password: string) => {
    try {
      const res = await axiosInstance.post("api/auth/register/", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  loginUser: async (username: string, password: string) => {
    try {
      const res = await axiosInstance.post("api/auth/login/", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  getToken: async (username: string, password: string) => {
    try {
      const res = await axiosInstance.post("api/token/", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  getUserData: async (access: string) => {
    try {
      const res = await axiosInstance.get("api/me/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  likingPost: async (id: number) => {
    try {
      const res = await axiosInstance.post(`api/postagens/${id}/curtir/`, {
        id,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  getPostLikes: async (id: number) => {
    try {
      const res = await axiosInstance.get(`api/postagens/${id}/curtidas/`);
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");
      if (refresh) {
        try {
          const res = await axios.post(
            "http://127.0.0.1:8000/api/token/refresh/",
            {
              refresh,
            },
          );

          const newAccess = res.data.access;
          localStorage.setItem("access", newAccess);

          originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
          return axiosInstance(originalRequest);
        } catch (error) {
          console.error("Refresh inválido, faça login de novo.", error);
        }
      }
    }
    return Promise.reject(error);
  },
);
