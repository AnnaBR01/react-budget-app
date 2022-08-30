import React, { useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
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
  console.log(debounceSearchValue);

  const filteredExpenses = expenses.filter((expense) => {
    return expense.name
      .toLowerCase()
      .includes(debounceSearchValue.toLowerCase());
  });

  let isFound = true;
  if (filteredExpenses.length === 0 && debounceSearchValue.length !== 0) {
    isFound = false;
  }
  console.log(filteredExpenses);

  return (
    <StyledMain>
      <Title title="Expenses" />
      <Input value={value} onChange={onChange} />
      {isFound ? (
        <List expenses={filteredExpenses} />
      ) : (
        <Description>Oooops 🙈</Description>
      )}
    </StyledMain>
  );
};
