
const initialState = {
    remoteArticles: []
}

const libraryReducer = (state = initialState, action) => {
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
      return state;
}

export default libraryReducer