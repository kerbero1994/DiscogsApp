const initSt = {
  Favorites: [],
};

const FavoritesReducer = (state = initSt, action) => {
  switch (action.type) {
    case "ADD_FAV": {
      return {
        ...state,
        Searches: [...state.Searches, ...action.payload],
      };
    }
    case "DELETE_FAV": {
      return {
        ...state,
        Searches: [...state.Searches, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
