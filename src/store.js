import { createStore } from 'redux';
import { gitJobsReducer } from './reducers/reducer';

export default createStore(gitJobsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());