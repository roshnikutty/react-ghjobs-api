import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { gitJobsReducer } from './reducers/reducer';

export default createStore(gitJobsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));