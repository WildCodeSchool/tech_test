import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";

export function App({ emails }) {
    return (
        <div className="blog-client">
            <aside>
                <Nav />
            </aside>

            <main>
                <Main emails={emails} />
            </main>
        </div>
    );
}

export default connect(state => ({
    emails: state.emails
}))(App);
