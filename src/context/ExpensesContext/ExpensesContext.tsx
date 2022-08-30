import React, { createContext, FC, useState } from "react";
import { IExpense, IExpenseContext, IExpensesProviderProps } from "./types";
import { v4 as uuidv4 } from "uuid";

export const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

const UseContextExpenses = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>({
    expenses: [],
    addNewExpense: (expense: IExpense) =>
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, { ...expense, id: uuidv4() }],
      })),
  });

  console.log(expensesContext);
  return expensesContext;
};

export const ExpensesContextProvider: FC<IExpensesProviderProps> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={UseContextExpenses()}>
      {children}
    </ExpensesContext.Provider>
  );
};
