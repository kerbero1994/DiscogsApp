const initSt = {
  Results: [],
  ConnectionState: "HOLD",
};

const HistoryReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ACTUAL_SEARCH": {
      return {
        ...state,
        Results: action.payload,
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
