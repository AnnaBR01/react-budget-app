import React, { createContext, FC, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContext, ICurrencyProviderProps } from "./types";

export const CurrencyContext = createContext<ICurrencyContext>(
  {} as ICurrencyContext
);

const UseContextCurrencyValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (newCurrency) =>
      setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency })),
  });
  return currencyContext;
};

export const CurrencyContextProvider: FC<ICurrencyProviderProps> = ({
  children,
}) => {
  return (
    <CurrencyContext.Provider value={UseContextCurrencyValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
