import React from "react";
import { connect } from "react-redux";
import PostList from "../Posts/List";
import { createRouteNodeSelector } from "redux-router5";
import CreatePost from "../Posts/Create";
import "./Home.css";

function Home(props) {
    const { route, posts } = props;

    return (
        <div id="home-page">
            <CreatePost />
            <PostList />
        </div>
    );
}

export default connect(createRouteNodeSelector("home"))(Home);
