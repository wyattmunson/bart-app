import * as AppReducer from "./AppReducer";
import * as TrainReducer from "./TrainReducer";
import { combineReducers } from "redux";

const reducers = combineReducers(Object.assign(AppReducer, TrainReducer));

export default reducers;
