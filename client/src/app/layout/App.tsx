import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../features/home/Home";
import ContactUs from "../../features/contact-us/ContactUs";
import AboutUs from "../../features/about-us/AboutUs";
import ProductDetails from "../../features/catalog/ProductDetails";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const paletteType = isDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
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
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Catalog} />
          <Route path="/shop/:id" Component={ProductDetails} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/contact-us" Component={ContactUs} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
