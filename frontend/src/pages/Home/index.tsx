import { Box, Container, Grid, Typography } from "@mui/material";
import { LikeCard } from "../../components/Card";
import { useAuth } from "../../context/Auth";

export default function HomePage() {
  const { authenticatedUser } = useAuth();

  console.log(authenticatedUser);
  return (
    <Container maxWidth="xl">
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography color="inhereit" variant="h1" component={"h1"}>
          Sugestões para a Cidade
        </Typography>

        <Grid container spacing={2} justifyContent={"center"}>
          <Grid>
            <LikeCard />
          </Grid>
          <Grid>
            <LikeCard />
          </Grid>
          <Grid>
            <LikeCard />
          </Grid>
          <Grid>
            <LikeCard />
          </Grid>
          <Grid>
            <LikeCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
