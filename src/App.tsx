import styled, {ThemeProvider} from "styled-components";
import theme from "./style/theme";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import {OneWayButton, TwoWayButton} from "./components/Button";
import {Icon16} from "./style/style";
import Card from "./components/Card";

function App() {
  const onClick = () => {
    console.log("CLICKED!");
  }

  const onClick2 = () => {
    console.log("OPENED!");
  }

  const onClick3 = () => {
    console.log("CLOSED!");
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
        <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={"Y"} onClick={onClick}>
          <Icon16 src={require("./assets/icon/icon_home.png")} alt="아이콘"/>
          <span>새로고침</span>
        </OneWayButton>
        <TwoWayButton text={"labelMd"} color={"keyWhite"} round={"md"}>
          <span onClick={onClick2}>선택가능</span>
          <Icon16 src={require("./assets/icon/icon_close.png")} alt="삭제" onClick={onClick3}/>
        </TwoWayButton>
        <Card></Card>
      </ThemeProvider>
    </div>
  );
}

export default App;