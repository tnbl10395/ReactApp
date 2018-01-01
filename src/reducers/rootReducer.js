import { combineReducers } from 'redux';
import nav from '../reducers/nav';
import add from '../reducers/add';

const rootReducer = combineReducers({
    nav,
    add
});

export default rootReducer