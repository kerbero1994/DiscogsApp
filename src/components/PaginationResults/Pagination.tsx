import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { actualSEARCH, connectionState } from "../../Redux/Actions/index";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import CardResult from "../CardsResults";
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiFillFastForward,
  AiFillFastBackward,
} from "react-icons/ai";

function Pagination() {
  const Search = useAppSelector((state) => state.Search);
  const Dispatch = useDispatch();
  const fetchData = async (url: string) => {
    try {
      Dispatch(connectionState("LOADING"));
      const response = await fetch(`${url}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        Dispatch(actualSEARCH(data));
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
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [Search.Results]);
  const theme = useTheme();
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: theme.backgroundField,
    },
    elements_container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      backgroundColor: theme.backgroundField,
    },
    pagination_container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      backgroundColor: theme.backgroundField,
    },
    pagination: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "15%",
    },
    button: {
      backgroundColor: "DodgerBlue",
      border: "none",
      color: "white",
      padding: "12px 16px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "10px",
      marginRight: "8px",
      marginTop: "8px",
    },
  });
  return (
    <>
      <div css={styles.container}>
        <div css={styles.elements_container}>
          {Search.Results.results &&
            Search.Results.results.length > 0 &&
            Search.Results.results.map((element: any) => {
              return <CardResult {...element} key={element.id} />;
            })}
        </div>
      </div>
      <div css={styles.pagination_container}>
        <div css={styles.pagination}>
          {Search.Results?.pagination?.urls?.first && (
            <a
              css={styles.button}
              onClick={() => {
                fetchData(Search.Results.pagination.urls.first);
              }}
            >
              <AiFillFastBackward />
            </a>
          )}
          {Search.Results?.pagination?.urls?.prev && (
            <a
              css={styles.button}
              onClick={() => {
                fetchData(Search.Results.pagination.urls.prev);
              }}
            >
              <AiFillStepBackward />
            </a>
          )}

          <a css={styles.button}>{Search.Results?.pagination?.page}</a>

          {Search.Results?.pagination?.urls?.next && (
            <a
              css={styles.button}
              onClick={() => {
                fetchData(Search.Results.pagination.urls.next);
              }}
            >
              <AiFillStepForward />
            </a>
          )}
          {Search.Results?.pagination?.urls?.last && (
            <a
              css={styles.button}
              onClick={() => {
                fetchData(Search.Results.pagination.urls.last);
              }}
            >
              <AiFillFastForward />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Pagination;
