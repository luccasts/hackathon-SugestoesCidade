import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { sugeCityService } from "../../api/sugeCityService";
import Collapse from "@mui/material/Collapse";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})<ExpandMoreProps>(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ILikeCard {
  titulo: string;
  descricao: string;
  autor: string;
  id: number;
}
interface ILikePost {
  postaagem: string;
  curtidas: string[];
}
export function LikeCard({ titulo, descricao, autor, id }: ILikeCard) {
  const [ranking, setRanking] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [postLikes, setPostLikes] = useState<ILikePost>();

  useEffect(() => {
    const handleRanking = async () => {
      try {
        const res = await sugeCityService.getPostLikes(id);
        if (res?.data) {
          setPostLikes(res?.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    handleRanking();
  }, [id]);
  const handleFavoriteClick = async () => {
    await sugeCityService.likingPost(id);
    // console.log(res);
    // handleRanking();
    setIsFavorited(!isFavorited);
  };
  const handleExpand = () => setRanking(!ranking);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <>
        <CardHeader title={titulo} subheader={`Autor: ${autor}`} />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {descricao}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon sx={{ color: isFavorited ? "red" : "inherit" }} />
          </IconButton>
          <ExpandMore
            expand={ranking}
            onClick={handleExpand}
            aria-expanded={ranking}
            aria-label="mostrar mais curtidas"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={ranking} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 1 }}>Curtidas:</Typography>
            {postLikes ? (
              postLikes.curtidas.map((c) => <Typography>{c}</Typography>)
            ) : (
              <Typography>Nenhuma curtida ainda</Typography>
            )}
          </CardContent>
        </Collapse>
      </>
    </Card>
  );
}
