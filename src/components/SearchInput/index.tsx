import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  replaceSEARCH,
  connectionState,
  addHistory,
} from "../../Redux/Actions/index";

function Home() {
  const [search, setSearch] = useState("");
  const today = new Date();
  const Dispatch = useDispatch();
  const fetchData = async (search: string) => {
    try {
      Dispatch(connectionState("LOADING"));
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=${process.env.REACT_API_KEY}&secret=${process.env.REACT_API_SECRET}`
      );
      const data = await response.json();
      console.log("inputSearch", search, data);
      if (data.results && data.results.length > 0) {
        Dispatch(replaceSEARCH(data));
        if (search !== "") {
          Dispatch(
            addHistory({
              time: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
              searchTerm: search,
              result: data,
            })
          );
        }
        Dispatch(connectionState("SUCCESS"));
      } else {
        Dispatch(connectionState("VOID"));
      }
    } catch (err) {
      console.log(err);
      Dispatch(connectionState("ERROR"));
    }
  };
  useEffect(() => {
    fetchData(search);
  }, []);
  return (
    <div className="Homer">
      <div>
        <input
          id="name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            fetchData(search);
          }}
        >
          buscar
        </button>
      </div>
    </div>
  );
}

export default Home;
