import React from "react";
import Layout from "../../components/Layout";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { pruneHistory, deleteHistory } from "../../Redux/Actions/index";

function index() {
  const Dispatch = useDispatch();
  const History = useAppSelector((state) => state.History);
  return (
    <Layout>
      <>
        <div>
          <button
            onClick={() => {
              Dispatch(pruneHistory());
            }}
          >
            Clear History
          </button>
        </div>
        <div>
          {History.Searches &&
            History.Searches.length > 0 &&
            History.Searches.map((HistoryEntry, entryIndex) => {
              return (
                <div
                  style={{
                    margin: "12px",
                  }}
                >
                  <h2>Search: {HistoryEntry.searchTerm}</h2>
                  <h2>Results: {HistoryEntry.result?.pagination?.items}</h2>
                  <h2>Time: {HistoryEntry.time}</h2>
                  <button
                    onClick={() => {
                      Dispatch(deleteHistory(entryIndex));
                    }}
                  >
                    delete entry
                  </button>
                </div>
              );
            })}
        </div>
      </>
    </Layout>
  );
}

export default index;
