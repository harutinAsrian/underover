const initialState = {
  showTimer: false,
  showGameNumber: false,
  showResult: false,
  onHold: false,
};

const gameFlow = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_TIMER":
      return { ...state, showTimer: !state.showTimer };
    case "SHOW_GAME_NUMBER":
      return { ...state, showGameNumber: !state.showGameNumber };
    case "SHOW_RESULT":
      return { ...state, showResult: !state.showResult };
    case "ON_HOLD":
      return { ...state, onHold: !state.onHold };
    default:
      return state;
  }
};

export default gameFlow;
