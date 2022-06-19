import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../Reducers/RootReducer";

const config = {
  key: "root",
  storage: storage,
  whitelist: ["History"],
};

const combinedReducer = persistReducer(config, rootReducer);

export const store = createStore(combinedReducer);
export const persister = persistStore(store);
export default store;