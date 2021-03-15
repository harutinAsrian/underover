import React, { useState, useEffect } from "react";
import BetDisplay from "./betDisplay/BetDisplay";
import BetStakeButtons from "./betStakeButtons/BetStakeButtons";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import { stakeValueAction } from "../../../../redux/actions/";

export default function BetCalc() {
  const dispatch = useDispatch();
  let [stakeValue, setStakeValue] = useState(5);
  const { roundStartMoney, currentMoney, betIsDone } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(stakeValueAction(stakeValue));
  }, [stakeValue]);

  useEffect(() => {
    if (roundStartMoney < stakeValue) setStakeValue(roundStartMoney);
  }, [roundStartMoney]);

  const onPlus = () => {
    if (currentMoney > 0 && !betIsDone) {
      setStakeValue(++stakeValue);
    }
    return stakeValue;
  };

  const onMinus = () => {
    if (stakeValue > 1 && !betIsDone) setStakeValue(--stakeValue);
  };

  const handleClick = (value) => {
    if (value <= roundStartMoney && !betIsDone) setStakeValue(value);
  };

  const double = () => {
    if (stakeValue * 2 <= roundStartMoney && !betIsDone) {
      setStakeValue((stakeValue = stakeValue * 2));
    }
    return stakeValue;
  };

  const half = () => {
    let half = stakeValue / 2;
    if (half >= 1 && !betIsDone) {
      if (half % 1 !== 0) {
        let fixed = half.toFixed(2);
        return setStakeValue(parseFloat(fixed));
      }
      return setStakeValue(half);
    }
  };

  return (
    <Box pb={2}>
      <BetDisplay value={stakeValue} onPlus={onPlus} onMinus={onMinus} />
      <BetStakeButtons handleClick={handleClick} half={half} double={double} />
    </Box>
  );
}
