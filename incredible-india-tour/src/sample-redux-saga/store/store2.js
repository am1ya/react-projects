import { createStore } from "redux";

//Initial state object
const initialState = {
    books: [{bookId: 1, title: 'Test Book'}]
}

//Reducer function
const bookStoreReducer = (state = initialState, action) => {
    if (action.type == 'ADD_BOOK') {
        return Object.assign({}, state, {
            books: state.books.concat(action.payload)
        })
    }
    return state;
}

//Store object creation
const store2 = createStore(bookStoreReducer);

export default store2