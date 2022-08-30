import React from "react";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      <Title title="Expenses" />
      <Input />
    </StyledMain>
  );
};
