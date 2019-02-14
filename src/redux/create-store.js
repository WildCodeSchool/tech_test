import { createStore, applyMiddleware, combineReducers } from "redux";
import { router5Middleware, router5Reducer } from "redux-router5";
import { posts, comments, users, errors } from "./reducers";
import { createLogger } from "redux-logger";

export default function configureStore(router, initialState = {}) {
    const createStoreWithMiddleware = applyMiddleware(
        router5Middleware(router),
        createLogger()
    )(createStore);

    const store = createStoreWithMiddleware(
        combineReducers({
            router: router5Reducer,
            posts,
            comments,
            users,
            errors
        }),
        initialState
    );

    window.store = store;
    return store;
}
