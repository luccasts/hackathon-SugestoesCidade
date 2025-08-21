import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { LikeCard } from "../../components/Card";
import { useEffect, useState } from "react";
import { sugeCityService } from "../../api/sugeCityService";
interface IData {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
}
export default function RankingPage() {
  const [data, setData] = useState<IData[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getAllPosts() {
      try {
        const res = await sugeCityService.rankingPosts();
        if (res?.data) {
          setData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getAllPosts();
  }, []);
  return (
    <Container maxWidth="xl">
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography color="inhereit" variant="h1" component={"h1"}>
          Ranking de Sugestões
        </Typography>

        <Grid container spacing={2} justifyContent={"center"}>
          {loading ? <Skeleton width={200} height={300}></Skeleton> : ""}
          {data
            ? data.map((d) => {
                return (
                  <Grid key={d.id}>
                    <LikeCard
                      id={d.id}
                      autor={d.autor}
                      titulo={d.titulo}
                      descricao={d.descricao}
                    />
                  </Grid>
                );
              })
            : ""}
          {/* <Grid>
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
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}
