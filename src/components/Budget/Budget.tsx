import { useBudgetContext } from "../../context/BudgetContext/hooks";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";

import { Button, Description, Input, StyledBudget } from "./styles";

export const Budget = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEditMode, toggleIsEditMode] = useToggle();
  const { value, onChange, setValue } = useInput();

  const handleClickSave = (): void => {
    toggleIsEditMode();
    setBudget(+value);
    setValue("");
  };

  const handleClickEdit = (): void => {
    toggleIsEditMode();
  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <Input
          placeholder="Enter budget..."
          type="number"
          step="0.01"
          value={value}
          onChange={onChange}
        ></Input>
      ) : (
        <Description>
          Budget: {currency}
          {budget}
        </Description>
      )}

      {isEditMode ? (
        <Button type="button" onClick={handleClickSave}>
          Save
        </Button>
      ) : (
        <Button type="button" onClick={handleClickEdit}>
          Edit
        </Button>
      )}
    </StyledBudget>
  );
};
