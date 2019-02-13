const commentsInitialState = {
    post: null,
    comments: []
};

export function comments(state = commentsInitialState, action) {
    switch (action.type) {
        case "UPDATE_TITLE":
            return {
                ...state,
                title: action.title
            };

        case "UPDATE_MESSAGE":
            return {
                ...state,
                message: action.message
            };

        default:
            return state;
    }
}
