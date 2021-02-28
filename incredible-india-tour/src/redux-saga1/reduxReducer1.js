
const reducer = (state = [{ userId: 0, id: 0, title: "", body: "" }], action) => {
    switch (action.type) {
      case 'GET_NEWS':
        return { ...state, loading: true };
      case 'NEWS_RECEIVED':
        return { ...state, news: action.json, loading: false }
      default:
        return state;
    }
  };
  
  export default reducer;