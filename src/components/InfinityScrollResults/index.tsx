import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { actualSEARCH, connectionState } from "../../Redux/Actions/index";

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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (e: WheelEvent): void => {
    const target = e.target as Document;
    if (
      window.innerHeight + target.documentElement.scrollTop + 1 >=
      target.documentElement.scrollHeight
    ) {
      if (Search.InfinityScrollResults.pagination.urls.next) {
        fetchData();
      }
    }
  };

  return (
    <>
      {Search.InfinityScrollResults &&
        Search.InfinityScrollResults.results.length > 0 &&
        Search.InfinityScrollResults.results.map(
          (element: { id: React.Key; title: string }) => {
            return <h1 key={element.id}>{element.title}</h1>;
          }
        )}
    </>
  );
}

export default Pagination;
