import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import CountryDataProvider from "./context/CountryContext";
import CountryDetails from "./pages/CountryDetails";
import Homepage from "./pages/Homepage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#424242" : "#f7f7f7",
        light: darkMode ? "#121212" : "#fff",
        contrastText: darkMode ? "#f7f7f7" : "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CountryDataProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout onSetDarkMode={setDarkMode} />}>
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
