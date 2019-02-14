import { SHOW_ERROR, HIDE_ERROR } from "../constants";

export function showError(error) {
    return {
        type: SHOW_ERROR,
        payload: error.message
    };
}

export function hideError() {
    return {
        type: HIDE_ERROR
    };
}
