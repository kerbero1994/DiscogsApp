import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const fetchData = async (search: string) => {
    try {
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=${process.env.REACT_API_KEY}&secret=${process.env.REACT_API_SECRET}`
      );
      const data = await response.json();
      const results = data.results;
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="app">
      <div>
        <label htmlFor="name">Buscar</label>
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

export default App;
