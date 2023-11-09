import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ShopContextProvider } from "./hooks/useShoppingCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  palette: {
    primary: { main: "#3a34d2" },
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ShopContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ShopContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
