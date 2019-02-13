import React from "react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";
import Home from "../Home/Home";

function Main({ route, posts }) {
    const topRouteName = route.name.split(".")[0];

    if (topRouteName === "home") {
        return <Home posts={posts} />;
    }

    /* if (topRouteName === "compose") {
        return <Compose />;
    }

    return <NotFound />; */
}

export default connect(createRouteNodeSelector(""))(Main);
