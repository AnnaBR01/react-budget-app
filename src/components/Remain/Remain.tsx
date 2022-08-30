import { useBudgetContext } from "../../context/BudgetContext/hooks";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { IExpense } from "../../context/ExpensesContext/types";
import { useToggle } from "../../hooks/useToggle";
import { Description, StyledRemain } from "./styles";

export const Remain = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  let [isOverspending] = useToggle();

  const sumExpenses = expenses.reduce((sum: number, expense: IExpense) => {
    return sum + +expense.cost;
  }, 0);

  const remain = budget - sumExpenses;
  if (remain < 0) {
    isOverspending = true;
  }

  return (
    <StyledRemain $overspending={isOverspending}>
      <Description>
        {isOverspending
          ? `Overspending by ${currency}${remain}`
          : `Remaining: ${currency}${remain}`}
      </Description>
    </StyledRemain>
  );
};
