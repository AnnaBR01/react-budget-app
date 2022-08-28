import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialState: string = "") => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  const reset = (): void => {
    setValue("");
  };

  return { value, onChange, reset };
};
