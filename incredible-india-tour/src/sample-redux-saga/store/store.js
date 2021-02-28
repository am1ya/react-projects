import { createStore } from 'redux';
import toDoApp from './reducer';

const store = createStore(toDoApp);

export default store