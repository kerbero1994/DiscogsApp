import HistoryReducer from "./HistoryReducer";
import SearchReducer from "./SearchReducer";
import SettingsReducer from "./SettingsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  History: HistoryReducer,
  Search: SearchReducer,
  Settings: SettingsReducer,
});

export default rootReducer;
