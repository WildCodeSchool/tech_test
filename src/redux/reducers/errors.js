import { SHOW_ERROR, HIDE_ERROR } from "../constants";

const errorsInitialState = {
    message: null,
    show: false
};

export function errors(state = errorsInitialState, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                show: action.message
            };

        case HIDE_ERROR:
            return {
                ...state,
                message: null,
                show: false
            };

        default:
            return state;
    }
}
