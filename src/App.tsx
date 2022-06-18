import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "./App.css";
import "./App.scss";
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

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
        <Button
          onClick={() => {
            fetchData(search);
          }}
        >
          buscar
        </Button>
      </div>
    </div>
  );
}

export default App;
