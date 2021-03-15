import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { receiveDataSuccess, receiveDataFailure } from './actions';
import axios from 'axios'

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* gameStart() {
  yield put({ type: "SHOW_TIMER" });
  yield delay(8000);
  yield put({ type: "SET_RANDOM_USER_STAKE" })
  yield put({ type: 'SET_RANDOM_USER_PREDICT' })
  yield put({ type: "DISABLE_BET_BUTTON_SAGA" });
  yield put({ type: "ON_HOLD" });
  yield delay(1000);
  yield put({ type: "SHOW_TIMER" });
  yield put({ type: "SHOW_GAME_NUMBER" });
  yield delay(2000);
  yield put({ type: "SHOW_GAME_NUMBER" });
  yield put({ type: "SHOW_RESULT" });
  yield delay(2500);
  yield put({ type: "SHOW_RESULT" });
  yield put({ type: "ON_HOLD" });
  yield put({ type: "CALCULATE_MONEY" });
  yield put({ type: "RESET_USER_REDUCER" });
  yield put({ type: "RESET_RANDOM_USER_STAKE" });
  yield put({ type: "RESET_RANDOM_USER_PREDICT" });
  yield put({ type: "ROUND_INCREMENT" });
}

function* changeGameNumber() {
  yield takeLatest("GAME_STATE", gameStart);
}

function* onDataFetch() {
  try {
    const response = yield call(axios.get, ['https://api.github.com/users']);
    yield put(receiveDataSuccess(response.data));
  } catch (e) {
    yield put(receiveDataFailure(e));
  }
}

export default function* rootSaga() {
  yield all([fork(changeGameNumber), fork(onDataFetch)]);
}
