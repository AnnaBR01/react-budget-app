import React from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { StyledApp } from "./ui/styles";

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Form />
    </StyledApp>
  );
};
