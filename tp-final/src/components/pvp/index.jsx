import MainAnimation from "../background";
import { Grid } from "@mui/material";
import useStyles from "./style";

import MediaCard from "../card";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ButtonOutlined from "../buttonOutlined";
import Results from "../results";
import { useNavigate } from "react-router-dom";

const currencies = [
  {
    value: "lagarto",
    label: "Lagarto",
  },
  {
    value: "papel",
    label: "Papel",
  },
  {
    value: "piedra",
    label: "Piedra",
  },
  {
    value: "spock",
    label: "Spock",
  },
  {
    value: "tijera",
    label: "Tijera",
  },
];

const PVE = () => {
  const { classes } = useStyles();
  const [playerChoose, setPlayerChoose] = useState("signo");
  const [player2Choose, setPlayer2Choose] = useState("signo");
  const [playerReady, setPlayerReady] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [result, setResult] = useState(false);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const navigate = useNavigate();

  const playerSelection = (option) => (event) => {
    event.preventDefault();
    setPlayerChoose(option);
    setPlayerReady(true);
    setbuttonDisabled(!player2Ready);
  };

  const player2Selection = (option) => (event) => {
    event.preventDefault();
    setPlayer2Choose(option);
    setPlayer2Ready(true);
    setbuttonDisabled(!playerReady);
  };

  const newGame = (event) => {
    event.preventDefault();
    setResult(false);
    setPlayerReady(false);
    setPlayer2Ready(false);
    setbuttonDisabled(true);
    setPlayerChoose("signo");
    setPlayer2Choose("signo");
  };

  const updateScore = (player) => {
    if (player === "Player 1") {
      setScorePlayer1(scorePlayer1 + 1);
    } else if (player === "Player 2") {
      setScorePlayer2(scorePlayer2 + 1);
    }
  };

  const handleResult = (event) => {
    event.preventDefault();
    setResult(true);
    setbuttonDisabled(true);
  };

  const goBack = () => {
    navigate("/");
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
        {" "}
        <ButtonOutlined
          title="Go back"
          onClick={goBack}
          style={{
            color: "black",
            border: "2px solid black",
            backgroundColor: "#ffd68d",
          }}
        />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={16} md={8} lg={4}>
            <MediaCard
              description={`Score:${scorePlayer1}`}
              title={"Player"}
              image={playerChoose}
            >
              {" "}
              <TextField
                id="filled-select-currency"
                select
                defaultValue="signo"
                helperText={
                  playerChoose === "signo"
                    ? "Choose any option, please"
                    : "Option choosen"
                }
                variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={playerSelection(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>{" "}
            </MediaCard>
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
            <MediaCard
              description={`Score:${scorePlayer2}`}
              title={"Player 2"}
              image={player2Choose}
            >
              {" "}
              <TextField
                id="filled-select-currency"
                select
                value={player2Choose}
                defaultValue="signo"
                helperText={
                  player2Choose === "signo"
                    ? "Choose any option, please"
                    : "Option choosen"
                }
                variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={player2Selection(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>{" "}
            </MediaCard>
            <ButtonOutlined
              disabled={buttonDisabled}
              onClick={handleResult}
              title={"PLAY"}
              style={{
                marginTop: "2%",
                color: "black",
                border: "2px solid black",
                backgroundColor: "#ffd68d",
              }}
            />
          </Grid>

          {result && (
            <Results
              player1={playerChoose}
              player2={player2Choose}
              newGame={newGame}
              updateScore={updateScore}
            />
          )}
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default PVE;
