import { STARTING_MONEY_AMOUNT } from "../../constants";

const initialState = {
  roundStartMoney: STARTING_MONEY_AMOUNT,
  currentMoney: STARTING_MONEY_AMOUNT,
  stakeValue: 5,
  betIsDone: false,
  buttonValue: "",
  userName: "",
  roundResult: 1,
  payout: 0,

};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "PUT_PAYOUT_VALUE":
      return { ...state, payout: action.payload.toFixed(2) };
    case "PUT_STAKE_VALUE":
      return {
        ...state,
        stakeValue: action.payload,
        currentMoney: state.roundStartMoney - action.payload,
      };
    case "TOGGLE_BET":
      return { ...state, betIsDone: !state.betIsDone };
    case "PUT_ROUND_RESULT":
      return { ...state, roundResult: action.payload };
    case "PUT_BUTTON_VALUE":
      return { ...state, buttonValue: action.payload };
    case "CALCULATE_MONEY":
      if (state.betIsDone) {
        if (state.roundResult) {
          state.roundStartMoney += parseInt(state.payout);
        } else {
          state.roundStartMoney = state.currentMoney;
        }
      }
      return {
        ...state,
        currentMoney: state.roundStartMoney - state.stakeValue,
      };
    case "RESET_USER_REDUCER":
      return { ...state, buttonValue: "", betIsDone: false };
    case "SET_USERNAME":
      return { ...state, userName: action.paylaod }
    default:
      return state;
  }
}
