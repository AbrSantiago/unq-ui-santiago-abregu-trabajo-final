import { Grid, Typography } from "@mui/material";
import useStyles from "./style";
import MainAnimation from "../../components/background";
import ComplexGrid from "../../components/cardHome";
import pvpImage from "../../images/pvp.jpg";
import pveImage from "../../images/pve.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const goToPVP = () => {
    navigate("/pvp");
  };

  const goToPVE = () => {
    navigate("/pve");
  };

  return (
    <>
      <MainAnimation />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.intento}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography sx={{ color: "white", fontSize: "50px", fontWeight: "bold" }}>
            Piedra Papel Tijera Lagarto Spock
          </Typography>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          className={classes.cards}
        >
          <Grid item xs={16} md={8} lg={4}>
            <ComplexGrid
              image={pvpImage}
              abreviattionTitle={"PVP"}
              title={"Player vs Player"}
              description={"Play against other players"}
              onClickButton={goToPVP}
              titleButton={"PLAY"}
            />
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <ComplexGrid
              image={pveImage}
              abreviattionTitle={"PVE"}
              title={"Player vs IA"}
              description={"Play against the IA"}
              onClickButton={goToPVE}
              titleButton={"PLAY"}
            />
          </Grid>
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default Home;
