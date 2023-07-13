import { useEffect, useState } from "react";
import "./results.css";
import piedra from "../../img/piedra.png";
import papel from "../../img/papel.png";
import tijera from "../../img/tijera.png";
import lagarto from "../../img/lagarto.png";
import spock from "../../img/spock.png";
import { Grid } from "@mui/material";
import ButtonOutlined from "../buttonOutlined";

const Results = ({ player1, player2, newGame, updateScore }) => {
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(winnerPlayer());
    updateScore(winner);
  }, [winner]);

  const showWinner = (player) => {
    if (player === "Tie") {
      return <h1 className="col-sm-12">Tie</h1>;
    } else {
      return <h1 className="col-sm-12">{`Winner : ${player}`}</h1>;
    }
  };

  const player1GanaPorPiedra = () => {
    return (
      player1 === "piedra" && (player2 === "tijera" || player2 === "lagarto")
    );
  };

  const player1GanaPorTijera = () => {
    return (
      player1 === "tijera" && (player2 === "lagarto" || player2 === "papel")
    );
  };

  const player1GanaPorPapel = () => {
    return player1 === "papel" && (player2 === "spock" || player2 === "piedra");
  };

  const player1GanaPorSpock = () => {
    return (
      player1 === "spock" && (player2 === "tijera" || player2 === "Piedra")
    );
  };

  const player1GanaPorLagarto = () => {
    return (
      player1 === "lagarto" && (player2 === "spock" || player2 === "papel")
    );
  };

  const winnerPlayer = () => {
    let winner;
    if (player1 === player2) {
      updateScore("");
      return "Tie";
    } else if (player1GanaPorPiedra()) {
      winner = "Player 1";
    } else if (player1GanaPorTijera()) {
      winner = "Player 1";
    } else if (player1GanaPorPapel()) {
      winner = "Player 1";
    } else if (player1GanaPorSpock()) {
      winner = "Player 1";
    } else if (player1GanaPorLagarto()) {
      winner = "Player 1";
    } else {
      winner = "Player 2";
    }

    return winner;
  };

  const imagen1 = (
    <img
      src={
        player1 === "piedra"
          ? piedra
          : player1 === "papel"
          ? papel
          : player1 === "tijera"
          ? tijera
          : player1 === "lagarto"
          ? lagarto
          : spock
      }
      alt={player1}
    ></img>
  );

  const imagen2 = (
    <img
      src={
        player2 === "piedra"
          ? piedra
          : player2 === "papel"
          ? papel
          : player2 === "tijera"
          ? tijera
          : player2 === "lagarto"
          ? lagarto
          : spock
      }
      alt={player2}
    ></img>
  );

  return (
    <div className="background ">
      <div className="results container-fluid">
        <div className="row h1-res">
          <h1 className="col-sm-12">Results</h1>
        </div>
        <div className="d-flex row img-container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 8, sm: 6, md: 12 }}
            justifyContent="center"
          >
            <Grid item xs={16} md={8} lg={4}>
              <div className="eleccion">
                {" "}
                Player 1 choose: {player1}
                <figure>
                  <div className="col-sm-6 img1"> {imagen1}</div>
                </figure>
              </div>
            </Grid>
            <Grid item xs={16} md={8} lg={4}>
              <div className="eleccion">
                Player 2 choose: {player2}
                <figure>
                  <div className="col-sm-6 img2">{imagen2}</div>
                </figure>
              </div>
            </Grid>
          </Grid>{" "}
        </div>
        <div className="row div-winner">{showWinner(winnerPlayer())}</div>
        <div className="row div-button">
          <ButtonOutlined
            style={{ 
              color: "black",
              border: "2px solid black",
              backgroundColor: "#ffd68d",
              marginBottom: "10px",
            }}
            onClick={newGame}
            title="Play again"
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
