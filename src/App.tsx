import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyle";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
        <Button text={"labelMd"} color={"pointOriginal"} round={"xl"} onClick={() => console.log("Clicked!")}>
          <img src={require("./assets/icon/icon_home.png")} alt="아이콘"/>
          버튼입니다.
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
