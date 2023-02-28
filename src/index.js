import React from "react";
import ReactDOM from "react-dom";
import { CustomizedButtons } from "./buttons.js";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      root: {
        display: "none",
        color: "red"
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        transition: "none",
        color: "green",
        "&:hover": {
          transition: "none",
          color: "blue",
          backgroundColor: "transparent !important"
        },
        "&$checked": {
          transition: "none",
          color: "purple",
          backgroundColor: "transparent !important",
          "&:hover": {
            transition: "none",
            color: "lightblue",
            backgroundColor: "transparent !important"
          },
          "&.Mui-focusVisible": {
            transition: "none",
            color: "red",
            backgroundColor: "transparent !important"
          }
        },
        "&.Mui-focusVisible": {
          transition: "none",
          color: "orange",
          backgroundColor: "transparent !important"
        },
        "&.focused:not(.Mui-focusVisible):not($checked)": {
          transition: "none",
          color: "pink",
          backgroundColor: "transparent !important"
        },
        ".MuiTouchRipple-root": {
          display: "hidden"
        }
      }
    }
  }
});
export default function App() {
  const [focused, setFocused] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Checkbox
          className={focused ? "focused" : ""}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <CustomizedButtons />
        <input value="somewhere to move focus" />
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
