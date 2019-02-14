import { LOAD_USER, REMOVE_USER } from "../constants";

const usersInitialState = {
    user: null
};

export function users(state = usersInitialState, action) {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                user: action.payload
            };

        case REMOVE_USER:
            return {
                ...state,
                user: null
            };

        default:
            return state;
    }
}
