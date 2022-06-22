import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../Reducers/RootReducer";

const config = {
  key: "root",
  storage: storage,
  whitelist: ["History", "Settings", "Favorites"],
};

const combinedReducer = persistReducer(config, rootReducer);
export const store = createStore(combinedReducer);
export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
