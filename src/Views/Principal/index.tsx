import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";

function Home() {
  const Call = useAppSelector((state) => state.Search.Results);
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log("se usa", Call);
    setResults(Call);
  }, [Call]);

  return (
    <div className="Home">
      <SearchInput />
      {results &&
        results.length > 0 &&
        results.map((element) => {
          return <h1 key={element.id}>{element.title}</h1>;
        })}
    </div>
  );
}

export default Home;
