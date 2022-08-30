import { ReactNode } from "react";

export interface IExpense {
  name: string;
  cost: number;
}

export interface IExpenseContext {
  expenses: IExpense[];
  addNewExpense: (expense: IExpense) => void;
  //   deleteExpense: (expense: IExpense) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
