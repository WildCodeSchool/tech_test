import React, { Component } from "react";
import { Input, Card, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";
import { Link } from "react-router5";
import { router } from "../..";
import "./Login.css";
import { UserService } from "../../services/user.service";
class Signup extends Component {
    state = {
        user: {
            username: "",
            password: ""
        }
    };
    render() {
        return (
            <div id="login-page">
                <Card centered>
                    <Card.Header>
                        <h2>Sign in</h2>
                    </Card.Header>
                    <Card.Content>
                        <Input
                            type="text"
                            label="Username"
                            value={this.state.user.username}
                            width={8}
                            onChange={this.setUsername}
                        />
                        <Input
                            label="Password"
                            type="password"
                            value={this.state.user.password}
                            width={8}
                            onChange={this.setPassword}
                        />
                    </Card.Content>
                    <Card.Content>
                        <Button
                            primary
                            onClick={this.login}
                            size="small"
                            disabled={
                                !this.state.user.username.length ||
                                !this.state.user.password.length
                            }
                        >
                            Log in
                        </Button>
                        <span>Don't have an account?</span>
                        <Link router={router} routeName="register">
                            {" "}
                            Click here
                        </Link>
                    </Card.Content>
                </Card>
            </div>
        );
    }

    setUsername = (evt, data) => {
        this.setState({ user: { ...this.state.user, username: data.value } });
    };
    setPassword = (evt, data) => {
        this.setState({ user: { ...this.state.user, password: data.value } });
    };

    login = () => {
        UserService.login(this.state.user);
    };
}

export default connect(createRouteNodeSelector("register"))(Signup);
