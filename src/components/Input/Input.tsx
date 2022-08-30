import React, { ChangeEvent, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { StyledInput } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: IProps) => {
  return (
    <StyledInput
      type="search"
      placeholder="search..."
      onChange={onChange}
      value={value}
    />
  );
};
