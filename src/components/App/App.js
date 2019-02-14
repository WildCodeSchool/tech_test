import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import "./App.css";
import { Message } from "semantic-ui-react";

export class App extends Component {
    render() {
        const { user, errors } = this.props;
        return (
            <div id="app">
                <nav>
                    <Nav user={user} />
                </nav>

                <main>
                    <Main />
                </main>
                {errors.show ? (
                    <Message
                        header="An error occured"
                        contents={errors.message}
                    />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    null
)(App);
