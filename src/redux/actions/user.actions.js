import { LOAD_USER, REMOVE_USER } from "../constants";

export function loadUser(payload) {
    return {
        type: LOAD_USER,
        payload
    };
}

export function removeUser() {
    return {
        type: REMOVE_USER
    };
}
