export const addSEARCH = (SEARCH) => ({
  type: "ADD_SEARCH",
  payload: SEARCH,
});
export const actualSEARCH = (SEARCH) => ({
  type: "ACTUAL_SEARCH",
  payload: SEARCH,
});
export const replaceSEARCH = (SEARCH) => ({
  type: "REPLACE_SEARCH",
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
export const addHistory = (SEARCH) => ({
  type: "ADD_HISTORY",
  payload: SEARCH,
});
export const deleteHistory = (INDEX) => ({
  type: "DELETE_HISTORY",
  payload: INDEX,
});
export const updateHistory = (SEARCH) => ({
  type: "UPDATE_HISTORY",
  payload: SEARCH,
});
export const pruneHistory = () => ({
  type: "PRUNE_HISTORY",
});
export const addFavorites = (fav) => ({
  type: "ADD_FAV",
  payload: fav,
});
export const deleteFavorites = (id) => ({
  type: "DELETE_FAV",
  payload: id,
});
export default { addSEARCH, actualSEARCH, changeTheme };
