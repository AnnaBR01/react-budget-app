import React from "react";
import { StyledTitle } from "./styles";

export interface ITitle {
  title: string;
}

export const Title = ({ title }: ITitle) => {
  return <StyledTitle>{title}</StyledTitle>;
};
