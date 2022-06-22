import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { actualSEARCH, connectionState } from "../../Redux/Actions/index";
import InfiniteScroll from "react-infinite-scroll-component";

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

  return (
    <>
      {Search.InfinityScrollResults &&
        Search.InfinityScrollResults.results.length > 0 && (
          <InfiniteScroll
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
            {Search.InfinityScrollResults.results.map(
              (record: {
                id: React.Key;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal;
              }) => {
                return <h1 key={record.id}>{record.title}</h1>;
              }
            )}
          </InfiniteScroll>
        )}
    </>
  );
}

export default Pagination;
