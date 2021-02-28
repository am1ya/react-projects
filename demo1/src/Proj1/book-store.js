import { createStore } from "redux";

//Initial state object
const initialState = {
    posts: [{id: 1, title: 'Test Book', bookId: 0, author: '', status: ''}],
    signUpModal: {
        open: false
    }
}

//Reducer function
const bookStoreReducer = (state = initialState, action) => {
    if (action.type == 'ADD_POST') {
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        })
    }
    return state;
}

//Store object creation
const store = createStore(bookStoreReducer);

export default store