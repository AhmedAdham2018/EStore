import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const paletteType = isDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea': '#121212'
      }
    },
  });

  function setPaletteThemeMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setDarkMode={setPaletteThemeMode} isDarkMode={isDarkMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
