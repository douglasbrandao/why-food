import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
