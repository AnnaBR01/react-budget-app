import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { IExpense } from "../../context/ExpensesContext/types";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import { Title } from "../Title/Title";
import { Description, StyledMain } from "./styles";

export const Main = () => {
  const { value, onChange } = useInput();
  const { expenses } = useExpensesContext();
  const debounceSearchValue = useDebounce(value);
  const [currentExpensesValue, setCurrentExpensesValue] =
    useState<IExpense[]>(expenses);

  useEffect(() => {
    debounceSearchValue
      ? setCurrentExpensesValue(
          expenses.filter((expense) => {
            return expense.name
              .toLowerCase()
              .includes(debounceSearchValue.toLowerCase());
          })
        )
      : setCurrentExpensesValue(expenses);
  }, [debounceSearchValue, expenses]);

  return (
    <StyledMain>
      <Title title="Expenses" />
      <Input value={value} onChange={onChange} />
      {currentExpensesValue.length > 0 ? (
        <List expenses={currentExpensesValue} />
      ) : (
        <Description>Oooops 🙈</Description>
      )}
    </StyledMain>
  );
};
