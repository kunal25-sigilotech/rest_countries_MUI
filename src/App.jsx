import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import CountryDataProvider from "./context/CountryContext";
import CountryDetails from "./pages/CountryDetails";
import Homepage from "./pages/Homepage";

function App() {
  const [curTheme, setCurTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: curTheme,
      primary: {
        main: curTheme === "dark" ? "#424242" : "#f7f7f7",
        light: curTheme === "dark" ? "#121212" : "#fff",
        contrastText: curTheme === "dark" ? "#fff" : "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CountryDataProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={<Layout curTheme={curTheme} onSetTheme={setCurTheme} />}
            >
              <Route index element={<Homepage />} />
              <Route path="/:name" element={<CountryDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CountryDataProvider>
    </ThemeProvider>
  );
}

export default App;
