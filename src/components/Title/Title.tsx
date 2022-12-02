import styles from "./Title.module.css";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { FC, useEffect, useState } from "react";
import { svgFilterId } from "./data";
import classNames from "classnames";
import useLinearTimeControl from "../../hooks/useLinearTimeControl";

type TProps = {
  sxRoot?: SxProps<Theme>;
  mainText: Array<string>;
};

const Title: FC<TProps> = ({ sxRoot = [], mainText }) => {
  const { startTimer, currentAction } = useLinearTimeControl([
    ["toggleToStart", 0],
    ["toggle", 1300],
  ]);

  const [state, setState] = useState({ toggle: true, toggleToStart: false });
  const [transitionState, setTransitionState] = useState(false);

  useEffect(() => {
    // if (mainText.length < 2) return;
    if (currentAction === "toggleToStart") {
      setState({ ...state, toggleToStart: !state.toggleToStart });
    }

    if (currentAction === "toggle") {
      setState({ ...state, toggle: !state.toggle });
    }
  }, [currentAction]);

  const { default_hidden, hidden, shown, shouldHide, shouldShow } = styles;
  const cnHiddenSpan = classNames(default_hidden);
  const cnFirstSpan = classNames({
    [`${shown}`]: state.toggle,
    [`${shouldHide}`]: state.toggle && state.toggleToStart,
    [`${hidden}`]: !state.toggle,
    [`${shouldShow}`]: !state.toggle && !state.toggleToStart,
  });
  const cnSecondSpan = classNames({
    [`${shown}`]: !state.toggle,
    [`${shouldHide}`]: !state.toggle && !state.toggleToStart,
    [`${hidden}`]: state.toggle,
    [`${shouldShow}`]: state.toggle && state.toggleToStart,
  });

  return (
    <Box
      sx={[
        {
          display: "flex",
          filter: `url(#${svgFilterId})`,
        },
        ...(Array.isArray(sxRoot) ? sxRoot : [sxRoot]),
      ]}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          cursor: "default",
        }}
      >
        <span id="hidden" className={cnHiddenSpan}>
          Apl-by
        </span>
        <span id="first" className={cnFirstSpan}>
          Example
        </span>
        <span id="second" className={cnSecondSpan}>
          just do that
        </span>
      </Typography>

      <svg
        id="filter"
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
									0 0 0 300 -155"
            />
          </filter>
        </defs>
      </svg>

      {/*  delete later */}
      <button
        style={{ position: "absolute", top: "-70px" }}
        // onClick={() => setState({ ...state, toggle: !state.toggle })}
        onClick={() => startTimer({ startDelay: 0, repeatCount: 3, repeatDelay: 300 })}
      >
        start
      </button>
      <button
        style={{ position: "absolute", top: "-40px" }}
        onClick={() =>
          setState({ ...state, toggleToStart: !state.toggleToStart })
        }
      >
        toggleToStart
      </button>
    </Box>
  );
};

export default Title;
