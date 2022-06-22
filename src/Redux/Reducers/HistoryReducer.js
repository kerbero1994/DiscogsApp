const initSt = {
  Searches: [],
};

const HistoryReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ADD_HISTORY": {
      return {
        ...state,
        Searches: [...state.Searches, action.payload],
      };
    }
    case "DELETE_HISTORY": {
      return {
        ...state,
        Searches: state.Searches.filter(
          (entry, index) => index !== action.payload
        ),
      };
    }
    case "UPDATE_HISTORY": {
      return {
        ...state,
        Searches: [...state.Searches, ...action.payload],
      };
    }
    case "PRUNE_HISTORY": {
      return {
        ...state,
        Searches: [],
      };
    }
    default:
      return state;
  }
};

export default HistoryReducer;
