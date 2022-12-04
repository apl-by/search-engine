import {FC} from 'react';

type TProps = {
  svgFilterId: string;
};

const SvgFilter: FC<TProps> = ({ svgFilterId }) => {
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
            values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 320 -140"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgFilter;
