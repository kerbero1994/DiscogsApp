import React from "react";
import { useAppSelector } from "../../hooks";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { replaceSEARCH, connectionState } from "../../Redux/Actions/index";
import { useNavigate } from "react-router-dom";

function HistoryList({ search }: { search: string }) {
  const HistorySearch = useAppSelector((state) => state.History.Searches);
  const theme = useTheme();
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const styles = createStyles({
    container: {
      width: "100%",
      display: "flex",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "4px",
      cursor: "pointer",
    },
  });
  if (HistorySearch.length > 0 && search !== "") {
    return (
      <>
        {HistorySearch.filter((entry) => entry.searchTerm.includes(search)).map(
          (listItem) => {
            return (
              <div
                css={styles.container}
                key={listItem?.result?.pagination?.items}
                onClick={() => {
                  Dispatch(connectionState("SUCCESS"));
                  Dispatch(replaceSEARCH(listItem.result));
                  navigate("/");
                }}
              >
                {listItem.searchTerm}
              </div>
            );
          }
        )}
      </>
    );
  } else {
    return null;
  }
}

export default HistoryList;
