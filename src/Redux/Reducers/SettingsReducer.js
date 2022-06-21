const initSt = {
  pagination: true,
  themeDark: false,
};

const SettingsReducer = (state = initSt, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        themeDark: !state.themeDark,
      };
    }
    case "CHANGE_PAGINATION": {
      return {
        ...state,
        pagination: !state.pagination,
      };
    }
    default:
      return state;
  }
};

export default SettingsReducer;
