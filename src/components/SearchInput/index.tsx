import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actualSEARCH } from "../../Redux/Actions/index";

function Home() {
  const [search, setSearch] = useState("");
  const Dispatch = useDispatch();
  const fetchData = async (search: string) => {
    try {
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=${process.env.REACT_API_KEY}&secret=${process.env.REACT_API_SECRET}`
      );
      const data = await response.json();
      const results = data.results;
      Dispatch(actualSEARCH(results));
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchData(search);
  }, []);
  return (
    <div className="Home">
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
