const initSt = {
  Searches: [],
};

const HistoryReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ADD_SEARCH": {
      return {
        ...state,
        Searches: [...state.Searches, action.payload],
      };
    }
    default:
      return state;
  }
};

export default HistoryReducer;
