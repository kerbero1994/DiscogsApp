const initSt = {
  Searches: [],
};

const HistoryReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ADD_SEARCH": {
      return {
        ...state,
        Searches: [...Searches, action.payload],
      };
    }
    default:
      return state;
  }
};

export default HistoryReducer;
