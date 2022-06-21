import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { actualSEARCH, connectionState } from "../../Redux/Actions/index";

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
  return (
    <>
      {Search.Results.results &&
        Search.Results.results.length > 0 &&
        Search.Results.results.map(
          (element: { id: React.Key; title: string }) => {
            return <h1 key={element.id}>{element.title}</h1>;
          }
        )}
      <ul className="pagination">
        {Search.Results?.pagination?.urls?.first && (
          <li>
            <a
              onClick={() => {
                fetchData(Search.Results.pagination.urls.first);
              }}
            >
              First
            </a>
          </li>
        )}
        {Search.Results?.pagination?.urls?.prev && (
          <li>
            <a
              onClick={() => {
                fetchData(Search.Results.pagination.urls.prev);
              }}
            >
              Previous
            </a>
          </li>
        )}

        <li>{Search.Results?.pagination?.page}</li>

        {Search.Results?.pagination?.urls?.next && (
          <li>
            <a
              onClick={() => {
                fetchData(Search.Results.pagination.urls.next);
              }}
            >
              Next
            </a>
          </li>
        )}
        {Search.Results?.pagination?.urls?.last && (
          <li>
            <a
              onClick={() => {
                fetchData(Search.Results.pagination.urls.last);
              }}
            >
              {Search.Results?.pagination?.pages}
            </a>
          </li>
        )}
      </ul>
    </>
  );
}

export default Pagination;
