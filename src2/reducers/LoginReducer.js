import { GO_HOME, GO_BACK, ADD } from '../actions/ActionTypes';
import { NavigationActions } from 'react-navigation';

export const loginReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case GO_HOME:
            NavigationActions.navigate({routeName:'Home'});
            return state
        case ADD: 
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
    return state;
}