import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Navigation/Router";
import { Box, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ height: "1000px" }}>
        <div className="App">
          <header className="App-header">
            <Box sx={{ width: "100%" }}>
              <Typography
                style={{ textAlign: "left" }}
                fontSize={25}
                fontWeight={"bold"}
                marginBottom={5}
                padding={2}
              >
                Testing
              </Typography>
            </Box>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </header>
        </div>
      </Box>
    </LocalizationProvider>
  );
}

export default App;
