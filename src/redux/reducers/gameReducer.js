const initialState = {
  round: 1,
  disableBetButton: true,
  roundHistory: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case "DISABLE_BET_BUTTON":
      return { ...state, disableBetButton: false };
    case "DISABLE_BET_BUTTON_SAGA":
      return { ...state, disableBetButton: true };
    case "ROUND_INCREMENT":
      return { ...state, round: ++state.round };
    case "ROUND_HISTORY":
      if (state.roundHistory.length > 7) state.roundHistory.shift()
      return {
        ...state,
        roundHistory: [...state.roundHistory, action.payload],
      };
    default:
      return state;
  }
};

export default gameReducer;
