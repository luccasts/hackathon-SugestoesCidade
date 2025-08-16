import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";

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

export function LikeCard() {
  const [like, setLike] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  const handleExpandClick = () => {
    setLike(!like);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      {loading ? (
        <Box>
          <Skeleton></Skeleton>
        </Box>
      ) : (
        <>
          <CardHeader title="Saphine" subheader="September 14, 2025" />

          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon sx={{ color: isFavorited ? "red" : "inherit" }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={like}
              onClick={handleExpandClick}
              aria-expanded={like}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={like} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
              <Typography sx={{ marginBottom: 2 }}>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}
