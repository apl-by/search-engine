import styles from "./Title.module.css";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { FC, useEffect, useState } from "react";
import { svgFilterId, timeControlMap, timerOptions } from "./data";
import classNames from "classnames";
import useLinearTimeControl from "../../hooks/useLinearTimeControl";
import SvgFilter from "../common/SvgFilter/SvgFilter";

type TProps = {
  sxRoot?: SxProps<Theme>;
  mainText: Array<string>;
  secondaryText?: Array<string>;
};

const Title: FC<TProps> = ({ sxRoot = [], mainText, secondaryText }) => {
  const { startTimer, currentAction, isTransition } =
    useLinearTimeControl(timeControlMap);

  const [state, setState] = useState({ toggle: true, toggleToStart: false });
  const [textWillBeUsed, setTextWillBeUsed] = useState(mainText);
  const [value, setValue] = useState({
    first: mainText[0],
    second: mainText[1],
  });
  const [count, setCount] = useState(0);

  const reset = () => {
    setState({ toggle: true, toggleToStart: false });
    setValue({
      first: mainText[0],
      second: mainText[1],
    });
    setCount(0);
  };

  const handleTitleClick = () => {
    if (isTransition) return;
    let text: string[];
    if (secondaryText === undefined) text = mainText;
    else {
      text = textWillBeUsed === mainText ? secondaryText : mainText;
    }

    setTextWillBeUsed(text);
    setValue({
      first: text[0],
      second: text[1],
    });
    startTimer({ ...timerOptions, repeatCount: text.length - 1 });
  };

  useEffect(() => {
    if (currentAction === "toggleToStart") {
      setState({ ...state, toggleToStart: !state.toggleToStart });
    }

    if (currentAction === "toggle") {
      const keyForUpd = count % 2 === 0 ? "first" : "second";
      const valueForUpd =
        count + 2 === textWillBeUsed.length
          ? textWillBeUsed[0]
          : textWillBeUsed[count + 2];
      setCount(count + 1);
      setValue({ ...value, [keyForUpd]: valueForUpd });
      setState({ ...state, toggle: !state.toggle });
    }
  }, [currentAction]);

  useEffect(() => {
    if (!isTransition && currentAction) reset();
  }, [isTransition]);

  useEffect(() => {
    if (mainText.length < 2) return;

    startTimer({
      ...timerOptions,
      startDelay: 1000,
      repeatCount: mainText.length - 1,
    });
  }, []);

  const { main, main_hidden, hidden, shown, shouldHide, shouldShow } = styles;

  const cnHiddenSpan = classNames(main, isTransition && main_hidden);
  const cnFirstSpan = classNames(
    {
      [`${shown}`]: state.toggle,
      [`${shouldHide}`]: state.toggle && state.toggleToStart,
      [`${hidden}`]: !state.toggle,
      [`${shouldShow}`]: !state.toggle && !state.toggleToStart,
    },
    !isTransition && main_hidden
  );
  const cnSecondSpan = classNames(
    {
      [`${shown}`]: !state.toggle,
      [`${shouldHide}`]: !state.toggle && !state.toggleToStart,
      [`${hidden}`]: state.toggle,
      [`${shouldShow}`]: state.toggle && state.toggleToStart,
    },
    !isTransition && main_hidden
  );

  return (
    <Box
      onClick={handleTitleClick}
      sx={[
        {
          display: "flex",
        },
        ...(Array.isArray(sxRoot) ? sxRoot : [sxRoot]),
      ]}
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          cursor: "pointer",
          userSelect: "none",
          filter: `url(#${svgFilterId})`,
        }}
      >
        <span id="hidden" className={cnHiddenSpan}>
          {mainText[0]}
        </span>
        <span id="first" className={cnFirstSpan}>
          {value.first}
        </span>
        <span id="second" className={cnSecondSpan}>
          {value.second}
        </span>
      </Typography>
      <SvgFilter svgFilterId={svgFilterId} />
    </Box>
  );
};

export default Title;
