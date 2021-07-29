import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ColorContextProvider } from "./context/Theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ColorContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ColorContextProvider>,
  rootElement
);
