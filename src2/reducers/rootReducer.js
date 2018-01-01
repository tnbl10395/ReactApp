import { combineReducers } from 'redux';
import {loginReducer} from '../reducers/LoginReducer';

const rootReducer = combineReducers({
    loginReducer,
});

export default rootReducer;