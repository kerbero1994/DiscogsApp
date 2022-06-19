import HistoryReducer from "./HistoryReducer";
import SearchReducer from "./SearchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  History: HistoryReducer,
  Search: SearchReducer,
});

export default rootReducer;
