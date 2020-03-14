import React from "react";
import ReactDOM from "react-dom";
import { theme as primer } from '@primer/components'
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// a theme with custom spacing and font sizes
const theme = {
  ...primer,
  space: [0, 8, 16, 24, 32, 64],
  fontSizes: [10, 12, 16, 24, 48]
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
