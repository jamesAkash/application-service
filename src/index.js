import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import AppContext from "./context/application_context";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
    secondary: {
      main: orange[500],
    },
    custom: {
      main: "orangered",
    },
  },
  typography: {
    myVariant: {
      fontSize: "6rem",
      display: "block",
      color: "dodgerblue",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContext>
        <App />
      </AppContext>
    </ThemeProvider>
  </React.StrictMode>
);
