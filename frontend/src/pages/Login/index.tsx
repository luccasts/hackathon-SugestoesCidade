import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage() {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(password, nome);
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
        Logar-se
      </Typography>
      <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          required
          type="text"
          id="outlined-password-input"
          label="Digite o Nome"
          variant="outlined"
          autoComplete="current-password"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          required
          type="password"
          id="outlined-password-input"
          label="Digite a Senha"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
