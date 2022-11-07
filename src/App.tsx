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

  const cont = "당신 그대로의 모습으로 미움받는 것이 당신답지 못한 모습으로 사랑받는 것보다 낫다. 나는 자연에 가까워졌고 이제 이 세상이 주는 아름다움에 감사할 수 있게 되었다."
  const recycleList = ["플라스틱", "캔", "비닐", "건전지", "종이"];


  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home/>
        <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={true} onClick={onClick}>
          <Icon16 src={require("./assets/icon/icon_home.png")} alt="아이콘"/>
          <span>새로고침</span>
        </OneWayButton>
        <TwoWayButton text={"labelMd"} color={"keyWhite"} round={"md"}>
          <span onClick={onClick2}>선택가능</span>
          <Icon16 src={require("./assets/icon/icon_close.png")} alt="삭제" onClick={onClick3}/>
        </TwoWayButton>
        <Card way={"수거방법"} img={"icon_home.png"} contents={cont} recycle={recycleList} title={"프라이탁"}/>
      </ThemeProvider>
    </div>
  );
}

export default App;