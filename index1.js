import { combineReducers } from "redux";
import counterReducer from "./ReducerOne";

const reducers = combineReducers({ counterReducer,});

export default reducers;
