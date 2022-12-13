import { createContext } from "react";
import { TInputValue } from "../types/types";

type TStateContext = {
  inputValue: TInputValue;
  setInputValue: React.Dispatch<React.SetStateAction<TInputValue>>;
};

const StateContext = createContext({} as TStateContext);

export default StateContext;
