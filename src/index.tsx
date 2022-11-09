import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {worker} from "./mocks/browser";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

/**
 * createRoot 가 기대하는 type 과 getElementById 가 기대하는 type 이 일치하지 않는다.
 * getElementById 는 null 을 반환할 수 있기 때문이다.
 * getElementById 가 리턴하는 type 을 명시해줌으로 오류를 해결한다.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);