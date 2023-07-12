import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  bg: {
    animation: "slide 3s ease-in-out infinite alternate",
    backgroundImage: "linear-gradient(-60deg, #3393FF 50%, black 50%)",
    bottom: "0",
    left: "-50%",
    opacity: "0.5",
    position: "fixed",
    right: "-50%",
    top: "0",
    zIndex: "-1",
  },
  bg2: {
    animationDirection: "alternate-reverse",
    animationDuration: "4s",
  },
  bg3: {
    animationDuration: "5s",
  },
  "@keyframes slide": {
    "0%": {
      transform: "translateX(-25%)",
    },
    "100%": {
      transform: "translateX(25%)",
    },
  },
}));

export default useStyles;
