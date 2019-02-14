import React from "react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import PostList from "../Posts/List";

function Main({ route, posts }) {
    const topRouteName = route.name.split(".")[0];

    if (topRouteName === "home") {
        return <Home posts={posts} />;
    }

    if (topRouteName === "register") {
        return <Signup />;
    }

    if (topRouteName === "login") {
        return <Login />;
    }

    if (topRouteName === "posts") {
        return <PostList />;
    }

    return null;
}

export default connect(createRouteNodeSelector(""))(Main);
