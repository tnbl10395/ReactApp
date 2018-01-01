import { ADD } from '../actions/ActionTypes';

const add = (state = { value:0 }, action) => {
    switch (action.type) {
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

export default add;