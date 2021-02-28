import { createStore } from "redux";

//Initial state object
const initialState = {
    posts: [{id: 1, title: 'Test Post'}],
    signUpModal: {
        open: false
    }
}

//Reducer function
const reducer = (state = initialState, action) => {
    if (action.type == 'ADD_POST') {
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        })
    }
    return state;
}

//Store object creation
const store = createStore(reducer);

export default store