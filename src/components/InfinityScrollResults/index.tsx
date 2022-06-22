import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { actualSEARCH, connectionState } from "../../Redux/Actions/index";
import InfiniteScroll from "react-infinite-scroll-component";
import CardResult from "../CardsResults";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";

function Pagination() {
  const Search = useAppSelector((state) => state.Search);
  const Dispatch = useDispatch();
  const fetchData = async () => {
    try {
      Dispatch(connectionState("LOADING"));
      const response = await fetch(`${Search.Results.pagination.urls.next}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        Dispatch(actualSEARCH(data));
        Dispatch(connectionState("SUCCESS"));
      } else {
        Dispatch(connectionState("VOID"));
      }
    } catch (err) {
      Dispatch(connectionState("ERROR"));
    }
  };
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
  });

  return (
    <>
      <div css={styles.container}>
        {Search.InfinityScrollResults &&
          Search.InfinityScrollResults.results.length > 0 && (
            <InfiniteScroll
              css={styles.elements_container}
              dataLength={Search.InfinityScrollResults.results.length}
              next={fetchData}
              hasMore={Search.Results.pagination.urls.next}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {Search.InfinityScrollResults.results.map((element: any) => {
                return <CardResult {...element} key={element.id} />;
              })}
            </InfiniteScroll>
          )}
      </div>
    </>
  );
}

export default Pagination;
