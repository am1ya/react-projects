import { createStore } from "redux";

//Initial state object
const initialState = {
    count: 0
};

//Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        default:
            return {
                count: state.count
            };
    }
}

//Store object creation
const store = createStore(reducer);

export default store