import React, { Component } from "react";
import { Card, Input, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { PostService } from "../../services/post.service";
class CreatePost extends Component {
    state = {
        post: {
            title: "",
            body: "",
            imageUrl: ""
        }
    };

    render() {
        return (
            <div style={{}}>
                <Card fluid>
                    <Card.Header>
                        <h3>
                            Create new post as{" "}
                            {this.props.user
                                ? this.props.user.username
                                : "Guest"}
                        </h3>
                    </Card.Header>
                    <Card.Content>
                        <Input
                            fluid
                            label="Title"
                            value={this.state.post.title}
                            onChange={this.setTitle}
                        />
                        <TextArea
                            label="Post"
                            value={this.state.post.body}
                            style={{ minHeight: 200, minWidth: 500 }}
                            onChange={this.setBody}
                        />
                        <Input
                            fluid
                            label="Image"
                            value={this.state.post.imageUrl}
                            onChange={this.setImageUrl}
                        />
                    </Card.Content>
                    <Card.Content>
                        <Button
                            primary
                            onClick={this.createPost}
                            disabled={!this.allowCreate()}
                        >
                            Post
                        </Button>
                    </Card.Content>
                </Card>
            </div>
        );
    }

    allowCreate = () => {
        const truth =
            this.state.post.title &&
            this.state.post.title.length > 0 &&
            this.state.post.body &&
            this.state.post.body.length > 0;
        return !!truth;
    };

    setTitle = (evt, data) => {
        this.setState({ post: { ...this.state.post, title: data.value } });
    };
    setBody = (evt, data) => {
        this.setState({ post: { ...this.state.post, body: data.value } });
    };
    setImageUrl = (evt, data) => {
        this.setState({ post: { ...this.state.post, imageUrl: data.value } });
    };
    createPost = () => {
        PostService.createPost(this.state.post);
    };
}

const mapStateToProps = state => ({
    user: state.users.user,
    posts: state.posts
});
export default connect(
    mapStateToProps,
    null
)(CreatePost);
