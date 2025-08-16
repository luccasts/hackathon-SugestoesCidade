import { Container, Grid } from "@mui/material";
import { LikeCard } from "../../components/Card";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
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
    </Container>
  );
}
