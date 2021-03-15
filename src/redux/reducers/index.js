import userReducer from "./userReducer";
import gameReducer from "./gameReducer";
import gameFlow from "./gameFlow";
import randomUserDataReducer from './randomUserDataReducer'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  game: gameReducer,
  user: userReducer,
  flow: gameFlow,
  randomUser: randomUserDataReducer
});

export default allReducers;
