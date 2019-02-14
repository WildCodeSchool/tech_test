import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import createRouter from "./routing/create-router";
import configureStore from "./redux/create-store";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

export const router = createRouter();
export const store = configureStore(router);
const wrappedApp = (
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
);

router.start((err, state) => {
    ReactDOM.render(wrappedApp, document.getElementById("root"));
});
