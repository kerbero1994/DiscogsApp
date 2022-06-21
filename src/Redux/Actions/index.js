export const addSEARCH = (SEARCH) => ({
  type: "ADD_SEARCH",
  payload: SEARCH,
});
export const actualSEARCH = (SEARCH) => ({
  type: "ACTUAL_SEARCH",
  payload: SEARCH,
});
export const connectionState = (SEARCH) => ({
  type: "SEARCH_STATE",
  payload: SEARCH,
});
export const changeTheme = () => ({
  type: "CHANGE_THEME",
});
export const changeResultsVisualizations = () => ({
  type: "CHANGE_PAGINATION",
});
export default { addSEARCH, actualSEARCH, changeTheme };
