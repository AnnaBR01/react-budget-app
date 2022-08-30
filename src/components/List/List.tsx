import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { Item } from "../Item/Item";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledList>
      {expenses.map((expense) => {
        return <Item expense={expense} />;
      })}
    </StyledList>
  );
};
