import Pagination from "./Pagination";
import { useAppSelector } from "../../hooks";

function DisplayResults() {
  const ViewOnPagination = useAppSelector((state) => state.Settings.pagination);
  const Search = useAppSelector((state) => state.Search);

  switch (Search.ConnectionState) {
    case "LOADING":
      return <p>Cargando</p>;
    case "SUCCESS":
      return (
        <>
          <Pagination />
        </>
      );
    case "ERROR":
      return <p>Error</p>;
    case "HOLD":
      return <p>Initial state</p>;
    case "VOID":
      return <p>No Results</p>;
    default:
      return <p>NonStateConnection</p>;
  }
}

export default DisplayResults;
