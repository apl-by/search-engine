import { FC } from "react";

type TProps = {
  svgFilterId: string;
  filterValues: string;
};

const SvgFilter: FC<TProps> = ({ svgFilterId, filterValues }) => {
  return (
    <svg
      id={"svg-" + svgFilterId}
      width={"1px"}
      height={"1px"}
      style={{ position: "absolute", visibility: "hidden" }}
    >
      <defs>
        <filter id={svgFilterId}>
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values={filterValues}
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgFilter;
