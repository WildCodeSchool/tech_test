import React from "react";
import { Link } from "react-router5";
import { List, Image } from "semantic-ui-react";

function PostListItem({ title, summary, id, imageUrl }) {
    return (
        <List.Item>
            <Image
                avatar
                src={
                    imageUrl
                        ? imageUrl
                        : "https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                }
            />
            <List.Content>
                <List.Header as="a">
                    <Link
                        routeName="posts.post"
                        routeParams={{ id }}
                        activeClassName="active"
                    >
                        {title}
                    </Link>
                </List.Header>
                <List.Description>{summary}</List.Description>
            </List.Content>
        </List.Item>
    );
}

export default PostListItem;
