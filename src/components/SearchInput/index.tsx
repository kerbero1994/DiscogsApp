import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  replaceSEARCH,
  connectionState,
  addHistory,
  changeResultsVisualizations,
} from "../../Redux/Actions/index";
import { useAppSelector } from "../../hooks";
import HistoryList from "../HistoryList";
import { createStyles } from "../../types/emotion-styles";
import { AiFillCustomerService } from "react-icons/ai";
import { useTheme } from "@emotion/react";

function Home() {
  const [search, setSearch] = useState("");
  const today = new Date();
  const Dispatch = useDispatch();
  const PrevSearch = useAppSelector((state) => state.Search.Results);
  const Paginated = useAppSelector((state) => state.Settings.pagination);
  const fetchData = async (search: string) => {
    try {
      Dispatch(connectionState("LOADING"));
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=${process.env.REACT_API_KEY}&secret=${process.env.REACT_API_SECRET}`
      );
      const data = await response.json();
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
    if (!(PrevSearch?.results?.length > 0)) {
      fetchData(search);
    }
  }, []);
  const theme = useTheme();
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      margin: "0",
      padding: "12px",
      height: "150px",
      backgroundColor: theme.backgroundField,
    },
    input_area: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    history_area: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: "4px",
      flexDirection: "column",
      zIndex: "9999",
      marginTop: "12px",
      borderRadius: "15px",
      backgroundColor: theme.backgroundField,
    },
    search: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    search_button: {
      backgroundColor: "DodgerBlue",
      border: "none",
      color: "white",
      padding: "8px 10px",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "10px",
      marginLeft: "8px",
    },
    input: {
      padding: "8px 10px",
      border: "0",
      borderRadius: "35px",
      "&:focus": {
        backgroundColor: "#ececec",
        border: "none",
      },
    },
  });
  return (
    <div css={styles.container}>
      <div css={styles.search}>
        <div css={styles.input_area}>
          <input
            id="name"
            css={styles.input}
            type="text"
            placeholder="Search.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(ev) => {
              if (ev.charCode === 13) {
                fetchData(search);
              }
            }}
          />
          <a
            css={styles.search_button}
            onClick={() => {
              fetchData(search);
            }}
          >
            <AiFillCustomerService />
          </a>
          <a
            css={styles.search_button}
            onClick={() => {
              Dispatch(changeResultsVisualizations());
            }}
          >
            {Paginated ? "Pagination" : "Scroll"}
          </a>
        </div>
        <div css={styles.history_area}>
          <HistoryList search={search} />
        </div>
      </div>
    </div>
  );
}

export default Home;
