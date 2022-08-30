import React, { MouseEventHandler } from "react";
import { IExpense } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { Button, Expense, StyledItem } from "./styles";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";

interface IProps {
  expense: IExpense;
}

export const Item = ({ expense }: IProps) => {
  const { deleteExpense } = useExpensesContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteExpense(e.currentTarget.getAttribute("data-id") ?? "unknown");
  };

  return (
    <StyledItem>
      <Expense>{expense.name}</Expense>
      <Badge cost={expense.cost} />
      <Button type="button" data-id={expense.id} onClick={handleClick}>
        <Close />
      </Button>
    </StyledItem>
  );
};
