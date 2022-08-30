import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { IExpense } from "../../context/ExpensesContext/types";
import { Description, StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const sumExpenses = expenses.reduce((sum: number, expense: IExpense) => {
    return sum + +expense.cost;
  }, 0);

  return (
    <StyledSpent>
      <Description>
        Spent so far: {currency}
        {sumExpenses}
      </Description>
    </StyledSpent>
  );
};
