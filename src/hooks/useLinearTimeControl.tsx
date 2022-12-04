import { TTimeMap } from "../types/types";
import { useState, useEffect, useRef, useCallback } from "react";

const useLinearTimeControl = (map: TTimeMap) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [currentAction, setCurrentAction] = useState("");
  const [currentInd, setCurrentInd] = useState(0);
  const [currentRepeat, setCurrentRepeat] = useState(0);
  const [repeatDelay, setRepeatDelay] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const [endDelay, setEndDelay] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [isSetTimeout, setIsSetTimeout] = useState(false);

  const _reset = () => {
    setCurrentAction("");
    setCurrentInd(0);
    setCurrentRepeat(0);
  };

  const _handleCurrentActiion = useCallback(() => {
    let [action, time] = map[currentInd];
    if (currentRepeat > 0 && currentInd === 0) time = repeatDelay;
    if (currentRepeat === repeatCount) time = endDelay;

    const timer = setTimeout(() => {
      setCurrentAction(action);

      if (currentInd === map.length - 1) {
        setCurrentInd(0);
        if (currentRepeat === repeatCount) {
          setIsSetTimeout(false);
          setIsTransition(false);
          return;
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
  }, [currentInd, endDelay, currentRepeat, repeatDelay, map, repeatCount]);

  const startTimer = useCallback(
    (
      options = { startDelay: 0, repeatCount: 0, repeatDelay: 0, endDelay: 0 }
    ) => {
      if (isTransition) return;
      _reset();
      setRepeatCount(options.repeatCount);
      setRepeatDelay(options.repeatDelay);
      setEndDelay(options.endDelay);

      const timer = setTimeout(() => {
        setIsTransition(true);
      }, options.startDelay);

      timerRef.current = timer;
    },
    [isTransition]
  );

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (!isTransition || isSetTimeout) return;
    _handleCurrentActiion();
  }, [currentInd, isTransition, isSetTimeout, _handleCurrentActiion]);

  return { startTimer, currentAction, isTransition };
};

export default useLinearTimeControl;
