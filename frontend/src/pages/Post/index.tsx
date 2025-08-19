import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";
import { sugeCityService } from "../../api/sugeCityService";

export default function PostPage() {
  const [tiitulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const id = 1;
      const res = await sugeCityService.createPost(tiitulo, descricao, id);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={1}
    >
      <Typography variant="h2" component={"h1"}>
        Criar postagem
      </Typography>
      <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          required
          type="text"
          id="outlined-password-input"
          label="Digite o Nome"
          variant="outlined"
          autoComplete="current-password"
          value={tiitulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <TextField
          required
          type="password"
          id="outlined-password-input"
          label="Digite a Senha"
          autoComplete="current-password"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button type="submit" variant="contained">
            Entrar
          </Button>
        </Box>
        <Box>
          <Box component={"p"}>
            Não tem conta ?{" "}
            <Typography component={Link} to={"/register"}>
              Criar conta{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
