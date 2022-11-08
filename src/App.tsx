import {ThemeProvider} from "styled-components";
import theme from "./style/theme";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/layout/Header";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;