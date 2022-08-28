import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";

import { Description, StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();

  return (
    <StyledSpent>
      <Description>Spent so far: {currency}2000</Description>
    </StyledSpent>
  );
};
