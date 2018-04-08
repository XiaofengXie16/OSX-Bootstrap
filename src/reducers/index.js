export default (state = [], action) => {
  switch (action.type) {
    case "QUERY_NPM":
      return [...state];
    case "QUERY_CASK":
      return [...state];
    default:
      return state;
  }
};
