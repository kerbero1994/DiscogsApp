export const addSEARCH = (SEARCH) => ({
  type: "ADD_SEARCH",
  payload: SEARCH,
});
export const actualSEARCH = (SEARCH) => ({
  type: "ACTUAL_SEARCH",
  payload: SEARCH,
});

export default { addSEARCH, actualSEARCH };
