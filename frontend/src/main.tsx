import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    mobile: 0,
    desktop: "768px",
  },
  colors: {
    primary: "#83C5BE",
    secondary: "#006D77",
    backgroundColor: "#EDF6F9",
    info: "#333333",
    shadow: "#959595",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Application />
    </ChakraProvider>
  </React.StrictMode>,
);
