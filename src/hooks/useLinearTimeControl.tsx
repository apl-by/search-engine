import { TTimeMap } from "../types/types";
import { useState, useEffect, useRef, useCallback } from "react";

const useLinearTimeControl = (map: TTimeMap) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [currentAction, setCurrentAction] = useState("");
  const [currentInd, setCurrentInd] = useState(0);
  const [currentRepeat, setCurrentRepeat] = useState(0);
  const [repeatDelay, setRepeatDelay] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isSetTimeout, setIsSetTimeout] = useState(false);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const reset = () => {
    setCurrentAction("");
    setCurrentInd(0);
    setCurrentRepeat(0);
  };

  const startTimer = useCallback(
    (options = { startDelay: 0, repeatCount: 0, repeatDelay: 0 }) => {
      if (isStart) return;
      reset();
      setRepeatCount(options.repeatCount);
      setRepeatDelay(options.repeatDelay);

      const timer = setTimeout(() => {
        setIsStart(true);
      }, options.startDelay);
      timerRef.current = timer;
    },
    [isStart]
  );

  useEffect(() => {
    if (!isStart || isSetTimeout) return;

    let [action, time] = map[currentInd];
    if (currentRepeat > 0 && currentInd === 0) time = repeatDelay;

    const timer = setTimeout(() => {
      setCurrentAction(action);
      if (currentInd === map.length - 1) {
        setCurrentInd(0);
        if (currentRepeat === repeatCount) {
          setIsSetTimeout(false);
          return setIsStart(false);
        }
        setCurrentRepeat(currentRepeat + 1);
        setIsSetTimeout(false);
        return;
      }
      setCurrentInd(currentInd + 1);
      setIsSetTimeout(false);
    }, time);

    setIsSetTimeout(true);
    timerRef.current = timer;
  }, [
    isStart,
    currentInd,
    map,
    isSetTimeout,
    currentRepeat,
    repeatCount,
    repeatDelay,
  ]);

  return { startTimer, currentAction };
};

export default useLinearTimeControl;