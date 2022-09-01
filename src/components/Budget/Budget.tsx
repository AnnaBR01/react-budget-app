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

  const handleSave = (): void => {
    toggleIsEditMode();
    setBudget(+value);
    setValue("");
  };

  const handleEdit = (): void => {
    toggleIsEditMode();
  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <>
          <Input
            placeholder="Enter budget..."
            type="number"
            step="0.01"
            value={value}
            onChange={onChange}
          ></Input>
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Description>
            Budget: {currency}
            {budget}
          </Description>

          <Button type="button" onClick={handleEdit}>
            Edit
          </Button>
        </>
      )}
    </StyledBudget>
  );
};
