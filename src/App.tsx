import styled, {ThemeProvider} from "styled-components";
import theme from "./theme";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyle";
import Button from "./components/Button";

function App() {
  const onClick = () => {
    console.log("CLICKED!");
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
        <Button text={"labelMd"} color={"keyWhite"} round={"md"} border={"Y"} onClick={onClick}>
          <Img src={require("./assets/icon/icon_home.png")} alt="아이콘"/>
          빵가루
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Img = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`