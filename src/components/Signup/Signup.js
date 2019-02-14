import React, { Component } from "react";
import { Input, Card, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";
import { Link } from "react-router5";
import { router } from "../..";
import "./Signup.css";
import { UserService } from "../../services/user.service";
class Signup extends Component {
    state = {
        user: {
            username: "",
            password: "",
            confirm: ""
        },
        passMatch: false
    };
    render() {
        return (
            <div id="signup-page">
                <Card centered>
                    <Card.Header>
                        <h2>Create account</h2>
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
                        <Input
                            label="Repeat"
                            type="password"
                            value={this.state.user.confirm}
                            fluid
                            onChange={this.setPasswordConfirm}
                        />
                    </Card.Content>
                    <Card.Content>
                        <Button
                            primary
                            onClick={this.register}
                            size="small"
                            disabled={
                                !this.state.passMatch ||
                                !this.state.user.username.length ||
                                !this.state.user.password.length
                            }
                        >
                            Log in
                        </Button>
                        <span>Already have an account?</span>
                        <Link router={router} routeName="login">
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
    setPasswordConfirm = (evt, data) => {
        this.setState(
            {
                user: { ...this.state.user, confirm: data.value }
            },
            () => {
                this.setState({
                    passMatch:
                        this.state.user.password === this.state.user.confirm
                });
            }
        );
    };

    register = () => {
        UserService.signup(this.state.user);
    };
}

export default connect(createRouteNodeSelector("register"))(Signup);
