import { ADD_ARTICLE } from './Constants';

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            })
            break;
        default:
            break;
    }
    return state;
}

export default rootReducer