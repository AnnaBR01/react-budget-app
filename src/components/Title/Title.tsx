import React from "react";
import { ITitle } from "../../types";
import { StyledTitle } from "./styles";

export const Title = ({ title }: ITitle) => {
  return <StyledTitle>{title}</StyledTitle>;
};
