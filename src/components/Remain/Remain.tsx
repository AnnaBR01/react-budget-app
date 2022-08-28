import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/hooks";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useToggle } from "../../hooks/useToggle";
import { Description, StyledRemain } from "./styles";

export const Remain = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const [isOverspending, toggleOverspending] = useToggle();

  //   const calcRemainddddd = (): void => {
  //     const remain = budget - 1000;
  //     if (remain < 0) {
  //       toggleOverspending();
  //     }
  //   };

  const calcRemain = () => {
    return budget ? budget - 1000 : 0;
  };

  return (
    <StyledRemain isOverspending>
      <Description>
        {isOverspending
          ? `Overspending by ${currency}
          ${calcRemain()}`
          : `Remaining: ${currency}
        ${calcRemain()}`}
      </Description>
    </StyledRemain>
  );
};
