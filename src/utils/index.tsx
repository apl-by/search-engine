import { TGetShortTextArgs } from "../types/types";

export const generateId = () => Math.random().toString(36).slice(2, 15);

export const getShortText = ({
  text,
  fontSize,
  fontFamily,
  cardWidth,
  requiredRowCount,
}: TGetShortTextArgs): string => {
  if (text === "") return "";
  const canvasEl = document.createElement("canvas");
  const ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
  ctx.font = fontSize + " " + fontFamily;
  const fullTextWidth = ctx.measureText(text).width;

  // 0.85 -уменьшающий коэффициент, для неполного заполнения текстом последней строки
  const requiredRowsWidth = cardWidth * 0.85 * requiredRowCount;

  if (fullTextWidth < requiredRowsWidth) return "";

  const percentageOfTextWidth = (100 / fullTextWidth) * requiredRowsWidth;

  const approximateInd = Math.floor(
    text.length * (percentageOfTextWidth / 100)
  );

  let shortText = text.slice(0, text.lastIndexOf(" ", approximateInd));

  let shortTextWidth = ctx.measureText(shortText).width;

  while (shortTextWidth > requiredRowsWidth) {
    shortText = shortText.slice(0, shortText.lastIndexOf(" "));
    shortTextWidth = ctx.measureText(shortText).width;
  }

  return shortText;
};
