import React, { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : "#121212"
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container> 
        <Catalog />
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
