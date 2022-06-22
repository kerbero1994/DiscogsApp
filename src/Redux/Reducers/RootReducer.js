import HistoryReducer from "./HistoryReducer";
import SearchReducer from "./SearchReducer";
import SettingsReducer from "./SettingsReducer";
import FavoritesReducer from "./FavoritesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  History: HistoryReducer,
  Search: SearchReducer,
  Settings: SettingsReducer,
  Favorites: FavoritesReducer,
});

export default rootReducer;
