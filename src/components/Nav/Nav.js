import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router5";
import { Button, Icon } from "semantic-ui-react";
import "./Nav.css";
import { removeUser } from "../../redux/actions/user.actions";

function Nav({ router, user, logout }) {
    return (
        <Button.Group>
            <Button>
                <Link
                    router={router}
                    routeName="home"
                    routeOptions={{ reload: true }}
                >
                    Home
                </Link>
            </Button>
            <Button>
                <Link router={router} routeName="posts">
                    Posts
                </Link>
            </Button>
            {user ? (
                <Button icon onClick={logout}>
                    <Icon name="sign out" />
                </Button>
            ) : (
                <>
                    <Link router={router} routeName="login">
                        <Button icon>
                            <Icon name="sign in" />
                        </Button>
                    </Link>
                    <Link router={router} routeName="register">
                        <Button icon>
                            <Icon name="add user" />
                        </Button>
                    </Link>
                </>
            )}
        </Button.Group>
    );
}

const mapStateToProps = state => ({
    route: state.router.route,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logout() {
        dispatch(removeUser());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
