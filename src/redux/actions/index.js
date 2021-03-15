export const gameFlow = () => {
  return {
    type: "GAME_STATE",
  };
};

export const stakeValueAction = (action) => {
  return {
    type: "PUT_STAKE_VALUE",
    payload: action,
  };
};

export const buttonValueAction = (action) => {
  return {
    type: "PUT_BUTTON_VALUE",
    payload: action,
  };
};

export const payoutValue = (action) => {
  return {
    type: "PUT_PAYOUT_VALUE",
    payload: action,
  };
};

export const betIsDoneAction = () => {
  return {
    type: "TOGGLE_BET",
  };
};

export const disableBetButtonAction = () => {
  return {
    type: "DISABLE_BET_BUTTON",
  };
};

export const roundResultAction = (action) => {
  return {
    type: "PUT_ROUND_RESULT",
    payload: action,
  };
};

export const roundHistoryAction = (action) => {
  return {
    type: "ROUND_HISTORY",
    payload: action,
  };
};

export const setUserNameAction = action => {
  return {
    type: "SET_USERNAME",
    paylaod: action
  }
}

///////////fetch actions///////////

export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const receiveDataSuccess = (action) => {
  return {
    type: "RECEIVE_DATA_SUCCESS",
    payload: action,
  }
}
export const receiveDataFailure = (action) => ({
  type: "RECEIVE_DATA_FAILURE",
  payload: action,
});