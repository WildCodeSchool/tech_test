import React from "react";
import { connect } from "react-redux";
import PostList from "./PostList";
import Summary from "./Summary";
import { createRouteNodeSelector } from "redux-router5";

function Home(props) {
    const { route, posts } = props;

    return (
        <div className="home">
            <PostList emails={posts} />
            {route.name === "inbox.message" ? (
                <Summary {...posts[route.params.id]} key={route.params.id} />
            ) : null}
        </div>
    );
}

export default connect(createRouteNodeSelector("home"))(Home);
