import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Signo from "../../img/signo.png";
import Lagarto from "../../img/lagarto.png";
import Papel from "../../img/papel.png";
import Piedra from "../../img/piedra.png";
import Spock from "../../img/spock.png";
import Tijera from "../../img/tijera.png";

const MediaCard = ({ title, description, children, image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "white",
        borderRadius: "5px",
        border: "2px solid black",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={
          image === "piedra"
            ? Piedra
            : image === "papel"
            ? Papel
            : image === "tijera"
            ? Tijera
            : image === "lagarto"
            ? Lagarto
            : image === "spock"
            ? Spock
            : Signo
        }
        title="eleccion"
      >
        {" "}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};

export default MediaCard;
