import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";
import { ICurrencyContext } from "./types";

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);
