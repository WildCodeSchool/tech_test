import {
    LOAD_POSTS,
    REMOVE_POST,
    LOAD_SINGLE_POST,
    ADD_POST
} from "../constants";

export function loadPosts(payload) {
    return {
        type: LOAD_POSTS,
        payload
    };
}

export function removePost(pid) {
    return {
        type: REMOVE_POST,
        payload: pid
    };
}

export function loadSinglePost(payload) {
    return {
        type: LOAD_SINGLE_POST,
        payload
    };
}

export function addPost(payload) {
    return {
        type: ADD_POST,
        payload
    };
}
