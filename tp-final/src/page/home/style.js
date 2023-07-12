import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  intento: {
    width: "100vw",
    height: "100vh",
  },

  cards: {
    marginTop: "-15%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-60%",
    },
    [theme.breakpoints.between("1024", "xl")]: {
      marginTop: "-20%",
    },
    [theme.breakpoints.between("1920", "2000")]: {
      marginTop: "-15%",
    },
  },
}));

export default useStyles;
