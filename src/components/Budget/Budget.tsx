import { useBudgetContext } from "../../context/BudgetContext/hooks";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";

import { Button, Description, Input, StyledBadget } from "./styles";

export const Budget = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isSaved, toggleIsSaved] = useToggle();
  const { value, onChange, reset } = useInput();

  const handleClick = (): void => {
    toggleIsSaved();
    setBudget(+value);
    reset();
  };

  return (
    <StyledBadget>
      {isSaved ? (
        <Input
          placeholder="Enter budget..."
          type="number"
          value={value}
          onChange={onChange}
        ></Input>
      ) : (
        <Description>
          Budget: {currency}
          {budget}
        </Description>
      )}

      <Button type="button" onClick={handleClick}>
        {isSaved ? "Save" : "Edit"}
      </Button>
    </StyledBadget>
  );
};
