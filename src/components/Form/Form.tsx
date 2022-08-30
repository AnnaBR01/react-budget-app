import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext/hooks";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Errors, Input, StyledForm } from "./styles";

type FormValues = {
  name: string;
  cost: number;
  id: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    addNewExpense(formValues);
    reset();
  };

  return (
    <StyledForm action="#" onSubmit={handleSubmit(onSubmit)}>
      <Title title="Add expense" />
      <Input
        type="text"
        placeholder="enter name ..."
        {...register("name", {
          required: "Name is requared",
          pattern: {
            value: /[A-Za-z]/,
            message: "Name must contain only letters",
          },
          maxLength: {
            value: 15,
            message: "Name must contain less than 15 characters",
          },
        })}
      />

      {errors.name && <Errors>{errors.name.message}</Errors>}

      <Input
        type="number"
        placeholder="enter cost ..."
        {...register("cost", {
          pattern: {
            value: /[0-9]/,
            message: "Cost must contain only numbers",
          },
          required: "Cost is requared",
          maxLength: {
            value: 5,
            message: "Cost must contain less than 5 characters",
          },
        })}
      />

      {errors.cost && <Errors>{errors.cost.message}</Errors>}

      <Button />
    </StyledForm>
  );
};
