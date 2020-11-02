import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0038b8",
    },
    secondary: {
      main: "#7F7979",
    },
    background: {
      default: "#FBFFFE",
    },
    text: {
      primary: "#1B1B1E",
      secondary: "#FBFFFE",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    fontSize: 14,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
