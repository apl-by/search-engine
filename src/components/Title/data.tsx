import { TTimeMap } from "../../types/types";
import { generateId } from "../../utils";

export const svgFilterId = "id" + generateId();

/*  [actionName, time] - элемент массива, где actionName - имя действия,
которое вернется через время time */
export const timeControlMap: TTimeMap = [
  ["toggleToStart", 0],
  ["toggle", 1050],
];

export const timerOptions = {
  startDelay: 0,
  repeatCount: 0,
  repeatDelay: 0,
  endDelay: 1000,
};
