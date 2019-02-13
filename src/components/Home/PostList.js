import React from "react";
import PostListItem from "./PostListItem";

export default function PostList({ posts }) {
    return (
        <ul className="post-list">
            {Object.values(posts).map(post => (
                <PostListItem {...post} key={post.id} />
            ))}
        </ul>
    );
}
