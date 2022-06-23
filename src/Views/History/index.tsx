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
  const theme = useAppSelector((state) => state.Settings.themeDark);

  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: theme ? "#001E3C" : "#F7F8FC",
      height: "96%",
      width: "100%",
    },
    elements_container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      backgroundColor: theme ? "#001E3C" : "#F7F8FC",
    },
    button_container: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      backgroundColor: theme ? "#001E3C" : "#F7F8FC",
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
      </>
    </Layout>
  );
}

export default index;
