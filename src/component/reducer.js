import { combineReducers } from "redux";
import pullReducer from "./CounterPull/reducer";

export default combineReducers({ pull: pullReducer });
