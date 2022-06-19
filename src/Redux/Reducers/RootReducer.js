import HistoryReducer from "./HistoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  History: HistoryReducer,
});

export default rootReducer;
