import React from "react";
import { Link } from "react-router5";

function PostListItem({ title, summary, id }) {
    return (
        <li>
            <Link
                routeName="posts.post"
                routeParams={{ id }}
                activeClassName="active"
            >
                <h4>{title}</h4>
                <p>{summary}</p>
            </Link>
        </li>
    );
}

export default PostListItem;
