import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
