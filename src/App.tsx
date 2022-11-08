import styled, {ThemeProvider} from "styled-components";
import theme from "./style/theme";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import {OneWayButton, TwoWayButton} from "./components/Button";
import {Icon16} from "./style/style";
import {useEffect, useState} from "react";
import CardList from "./components/CardList";

function App() {
  const [list, setList] = useState([]);

  const onClick = () => {
    console.log("CLICKED!");
  }

  const onClick2 = () => {
    console.log("OPENED!");
  }

  const onClick3 = () => {
    console.log("CLOSED!");
  }

  useEffect( () => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  }

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
        <CardList data={list}/>
      </ThemeProvider>
    </div>
  );
}

export default App;