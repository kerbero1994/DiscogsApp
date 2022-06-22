import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persister } from "./Redux/Store/StoreConfig";
import { PersistGate } from "redux-persist/lib/integration/react";
import Details from "./Views/Details";
import Principal from "./Views/Principal";
import History from "./Views/History";
import Favorites from "./Views/Favorites";
import Error404 from "./Views/Error_404";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/History" element={<History />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
