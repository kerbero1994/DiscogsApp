/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import {
  changeTheme,
  changeResultsVisualizations,
} from "../../Redux/Actions/index";
import { Link } from "react-router-dom";

function index() {
  const theme = useTheme();
  const styles = createStyles({
    container: {
      backgroundColor: theme.background,
      color: theme.text,
      padding: "1em",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      minHeight: "100 px",
    },
  });
  const Dispatch = useDispatch();
  return (
    <div css={styles.container}>
      Navbar
      <button
        onClick={() => {
          Dispatch(changeTheme());
        }}
      >
        DarkMode
      </button>
      <button
        onClick={() => {
          Dispatch(changeResultsVisualizations());
        }}
      >
        Pagination
      </button>
      <Link to={"/History"}>
        <button>History</button>
      </Link>
      <Link to={"/Favorites"}>
        <button>Favorites</button>
      </Link>
    </div>
  );
}

export default index;
