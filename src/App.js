import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
