import { createContext, FC, useState } from "react";
import { IBudgetContext, IBudgetProviderProps } from "./types";

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

const UseBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>({
    budget: 0,
    setBudget: (newCurrency) =>
      setBudgetContext((ctx) => ({ ...ctx, budget: newCurrency })),
  });
  return budgetContext;
};

export const BudgetContextProvider: FC<IBudgetProviderProps> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={UseBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
