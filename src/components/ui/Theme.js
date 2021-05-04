import { createMuiTheme } from "@material-ui/core/styles";

const acrBlue = "#0b72b9";
const acrOrange = "#ffba60";
const bkgGrey = "#eee";

export default createMuiTheme({
  palette: {
    type: "light",
    common: {
      acrBlue: "acrBlue",
      acrOrange: acrOrange,
      bkgGrey: bkgGrey,
    },
    primary: {
      main: acrBlue,
    },
    secondary: {
      main: acrOrange,
    },
  },
  typography: {
    h1: {
      fontWeight: 100,
      color: "#888",
      fontSize: "6.4rem",
    },
    h2: {
      fontWeight: 400,
      color: "#333",
      fontSize: "4.8rem",
    },
    h3: {
      fontWeight: 100,
      color: "#333",
      fontSize: "4.0rem",
    },
    h5: {
      fontWeight: 300,
      color: "#333",
      fontSize: "1.4rem",
    },
    h6: {
      fontWeight: 700,
      color: "#333",
      fontSize: "1.2rem",
    },
    tab: {
      color: "gold",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      marginLeft: "0px",
    },
  },
  layout: {
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  transitions: {
    common: "all 0.1s ease-in-out",
  },
});
