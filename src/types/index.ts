import { Currency } from "../config/currency";

export interface ITitle {
  title: string;
}

export interface IOption {
  readonly value: Currency;
  readonly label: string;
}
