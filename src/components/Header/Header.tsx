import React from "react";
import { Budget } from "../Budget/Budget";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Remain } from "../Remain/Remain";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Title title="Budget App" />
      <CustomSelect />
      <Budget />
      <Remain />
      <Spent />
    </StyledHeader>
  );
};
