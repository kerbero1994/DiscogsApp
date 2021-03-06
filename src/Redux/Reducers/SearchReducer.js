const initSt = {
  Results: [],
  InfinityScrollResults: {
    pagination: {},
    results: [],
  },
  ConnectionState: "HOLD",
};

const HistoryReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ACTUAL_SEARCH": {
      return {
        ...state,
        Results: action.payload,
        InfinityScrollResults: {
          pagination: action.payload.pagination,
          results: [
            ...state.InfinityScrollResults.results,
            ...action.payload.results,
          ],
        },
      };
    }
    case "REPLACE_SEARCH": {
      return {
        ...state,
        Results: action.payload,
        InfinityScrollResults: action.payload,
      };
    }
    case "SEARCH_STATE": {
      return {
        ...state,
        ConnectionState: action.payload,
      };
    }
    default:
      return state;
  }
};

export default HistoryReducer;
