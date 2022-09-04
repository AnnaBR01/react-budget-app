import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { AppContextProvider } from "./context/AppContextProvider/AppContextProvider";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <GlobalStyles />
    <App />
  </AppContextProvider>
);
