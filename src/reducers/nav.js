import { AppNavigator } from '../route/Route';
import { NavigationActions } from 'react-navigation';
import { GO_HOME,GO_BACK } from '../actions/ActionTypes';

const firstScreen = AppNavigator.router.getActionForPathAndParams('Login');
const secondScreen = AppNavigator.router.getActionForPathAndParams('Home');
const initialState = AppNavigator.router.getStateForAction(
    firstScreen,
);

const nav = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case GO_HOME:
            nextState = AppNavigator.router.getStateForAction(
                secondScreen,
                state
            );
            break; 
        case GO_BACK:
            nextState = AppNavigator.router.getStateForAction(
                firstScreen
            );
            break; 
        default:
            nextState = AppNavigator.router.getStateForAction(action,state);
            break;
    }
    return nextState || state;
}

export default nav;