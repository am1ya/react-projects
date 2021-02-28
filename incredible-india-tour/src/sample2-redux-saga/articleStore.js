import rootReducer from "../sample2-redux-saga/rootReducer";
import { createStore } from "redux";

const articleStore = createStore(rootReducer);

export default articleStore