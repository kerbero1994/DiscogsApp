import Layout from "../../components/Layout";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { pruneHistory } from "../../Redux/Actions/index";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import CardHistory from "../../components/CardHistory";
import { AiFillDelete } from "react-icons/ai";

function index() {
  const Dispatch = useDispatch();
  const History = useAppSelector((state) => state.History);
  const theme = useTheme();
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: "#f7f8fc",
    },
    elements_container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    button_container: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    button: {
      backgroundColor: "#C62828",
      border: "none",
      color: "white",
      padding: "12px 16px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "50px",
      marginRight: "8px",
      marginTop: "8px",
    },
  });
  return (
    <Layout>
      <>
        <div css={styles.container}>
          <div css={styles.elements_container}>
            {History.Searches &&
              History.Searches.length > 0 &&
              History.Searches.map((HistoryEntry, entryIndex) => {
                return (
                  <CardHistory
                    {...HistoryEntry}
                    index={entryIndex}
                    key={HistoryEntry.result?.pagination?.items}
                  />
                );
              })}
          </div>
        </div>
        <div css={styles.button_container}>
          <a
            css={styles.button}
            onClick={() => {
              Dispatch(pruneHistory());
            }}
          >
            {" "}
            <AiFillDelete />
          </a>
        </div>
      </>
    </Layout>
  );
}

export default index;
