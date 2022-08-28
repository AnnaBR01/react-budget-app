import { useContext } from "react";
import { BudgetContext } from "./BudgetContext";
import { IBudgetContext } from "./types";

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);
