import { createStore } from "redux";

//Initial state object
const initialState = {
    books: [{bookId: 0, title: 'Ramayan', author: 'Valmiki', status: 'Available'}]
}

//Reducer function
const reducer = (state = initialState, action) => {
    if (action.type == 'ADD_BOOK') {
        return Object.assign({}, state, {
            books: state.books.concat(action.payload)
        })
    }
    return state;
}

//Store object creation
const store = createStore(reducer);

export default store