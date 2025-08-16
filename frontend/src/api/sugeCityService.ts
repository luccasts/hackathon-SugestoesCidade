import { axiosInstance } from "./sugeCityInstance";

export const sugeCityService = {
  getAllPosts: async () => {
    try {
      const res = await axiosInstance.get("/usuarios/postagens/");
      return res;
    } catch (erro) {
      console.error(erro);
    }
  },

  createPost: async (titulo: string, descricao: string, id: string) => {
    try {
      const res = await axiosInstance.post("/usuarios/postagens/criar", {
        titulo,
        descricao,
        autor: id,
      });
      return res;
    } catch (erro) {
      console.error(erro);
    }
  },
  registerUser: async (username: string, password: string) => {
    try {
      const res = await axiosInstance.post("/usuarios/auth/register/", {
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
      const res = await axiosInstance.post("/usuarios/auth/login/", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};
