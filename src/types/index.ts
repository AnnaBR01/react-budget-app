import { Currency } from "../config/currency";

export interface IOption {
  readonly value: Currency;
  readonly label: keyof typeof Currency;
}
