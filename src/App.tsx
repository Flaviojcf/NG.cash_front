import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from './Router';
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
       <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
      <GlobalStyle />

    </ThemeProvider>

  )
}

export default App;
