import { StylesConfig } from "react-select";
import { Color } from "../../config/colors";
import { IOption } from "../../types";

export const customStyles: StylesConfig<IOption> = {
  container: (provided) => ({
    ...provided,
    width: 90,
    gridArea: "select",
    justifySelf: "end",

    "@media screen and (min-width: 768px)": {
      ...provided,
      width: 100,
    },
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: 5,
    borderWeight: 1,
    borderColor: Color.LigthGray,
  }),

  singleValue: (provided) => ({
    ...provided,
    fontWeight: 400,
    fontSize: 12,

    "@media screen and (min-width: 768px)": {
      ...provided,
      fontSize: 16,
    },
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: Color.LigthGray,
  }),
};
