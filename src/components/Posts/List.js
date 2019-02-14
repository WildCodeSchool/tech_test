import React, { Component } from "react";
import PostListItem from "./ListItem";
import { PostService } from "../../services/post.service";
import { connect } from "react-redux";
import { List, Image } from "semantic-ui-react";

class PostList extends Component {
    componentDidMount() {
        const { user } = this.props;
        PostService.getPosts(user && user.id);
    }
    render() {
        const { posts } = this.props;
        return (
            <List relaxed>
                {posts && posts.length
                    ? Object.values(posts).map((post, idx) => (
                          <PostListItem
                              {...{ ...post, summary: post.body.slice(0, 50) }}
                              key={idx}
                          />
                      ))
                    : null}
            </List>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    posts: state.posts.posts
});

export default connect(
    mapStateToProps,
    null
)(PostList);
