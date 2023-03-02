import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Open Sans",
        primaryColor: "brand",
        colors: {
          brand: [
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
            "#03B167",
          ],
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
