import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import TocPage from "./components/views/TocPage";
import View from "./components/views/View";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/toc" element={<TocPage />} />
      </Routes>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  );
}

export default App;
