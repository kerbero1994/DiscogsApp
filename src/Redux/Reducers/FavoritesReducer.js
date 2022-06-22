const initSt = {
  List: [],
};

const FavoritesReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ADD_FAV": {
      return {
        ...state,
        List: [...state.List, action.payload],
      };
    }
    case "DELETE_FAV": {
      return {
        ...state,
        List: state.List.filter((entry) => entry.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
