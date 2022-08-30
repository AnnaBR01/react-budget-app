import { useContext } from "react";
import { ExpensesContext } from "./ExpensesContext";
import { IExpenseContext } from "./types";

export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpensesContext);
