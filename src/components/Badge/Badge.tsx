import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { StyledBadge } from "./styles";

interface IProps {
  cost: number;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useCurrencyContext();

  return (
    <StyledBadge>
      {currency}
      {cost}
    </StyledBadge>
  );
};
