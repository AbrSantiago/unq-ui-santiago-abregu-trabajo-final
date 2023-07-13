import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  intento: {
    width: "100vw",
    height: "100vh",
    paddingTop: "5%",
  },

  cards: {
    backgroundColor: "black",
  },
}));

export default useStyles;
