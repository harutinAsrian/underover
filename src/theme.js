import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C5C4E1",
    },
    secondary: {
      main: "#282840",
    },
  },

});

theme.typography.h2 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
};

export default theme;
