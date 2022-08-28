import Select, { SingleValue } from "react-select";
import { Currency } from "../../config/currency";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";

import { IOption } from "../../types";
import { customStyles } from "./styles";

export const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContext();

  const handleCurrency = (option: SingleValue<IOption>) => {
    if (option) setCurrency(option.value);
  };

  const getCurrency = () =>
    options.find((option) => {
      return option.value === currency;
    });

  return (
    <Select
      options={options}
      value={getCurrency()}
      onChange={handleCurrency}
      styles={customStyles}
      isMulti={false}
      isSearchable={false}
    />
  );
};
