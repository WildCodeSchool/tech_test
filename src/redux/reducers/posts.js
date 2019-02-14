import {
    LOAD_POSTS,
    REMOVE_POST,
    LOAD_SINGLE_POST,
    ADD_POST
} from "../constants";

const postsInitialState = {
    posts: [],
    post: null
};

export function posts(state = postsInitialState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case LOAD_SINGLE_POST:
            return {
                ...state,
                post: action.payload
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };

        default:
            return state;
    }
}
