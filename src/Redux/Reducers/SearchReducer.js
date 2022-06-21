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
      console.log(action.payload.pagination);
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
