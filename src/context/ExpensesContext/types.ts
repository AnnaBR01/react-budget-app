import { ReactNode } from "react";

export interface IExpense {
  name: string;
  cost: number;
  id: string;
}

export interface IExpenseContext {
  expenses: IExpense[];
  addNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
