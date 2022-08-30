import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { IExpense } from "../../context/ExpensesContext/types";
import { Item } from "../Item/Item";
import { StyledList } from "./styles";

interface IProps {
  expenses: IExpense[];
}

export const List = ({ expenses }: IProps) => {
  return (
    <StyledList>
      {expenses.map((expense) => {
        return <Item expense={expense} />;
      })}
    </StyledList>
  );
};
