import { TTimeMap } from "../../types/types";

export const svgFilterId = "titleFilter";

/*  [actionName, time] - элемент массива, где actionName - имя действия,
которое вернется через время time */
export const timeControlMap: TTimeMap = [
  ["toggleToStart", 0],
  ["toggle", 1050],
];
