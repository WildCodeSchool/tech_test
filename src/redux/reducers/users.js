const usersInitialState = {
    user: null
};

export function users(state = usersInitialState, action) {
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
