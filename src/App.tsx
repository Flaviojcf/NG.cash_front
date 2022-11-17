import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />

          <GlobalStyle />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
