import { ApiService } from "../services/api.service";
import { store, router } from "..";
import { loadUser } from "../redux/actions/user.actions";
import { showError } from "../redux/actions/errors.actions";
class User {
    async signup({ username, password }) {
        // rudimentary validation
        if (!username || !username.length || !username || password.length < 3) {
            return {
                error: new Error(
                    "Username cannot be blank and password must exceed 2 characters"
                )
            };
        }

        const { data: user, error } = await ApiService.post("/users", {
            username,
            password
        });
        if (user) {
            store.dispatch(loadUser(user));
            router.navigate("home");
        } else {
            store.dispatch(
                showError(
                    new Error(
                        "Could not create a user at this time. Please try again later."
                    )
                )
            );
        }
    }

    async login({ username, password }) {
        // perform fake login routine.
        // meaning, retrieve user with username and compare their password with provided one
        // if user doesn't exist, fail.
        // if passwords don't match, fail.
        const { data: users } = await ApiService.get("/users");
        if (!users) {
            store.dispatch(
                showError(
                    new Error("Could not fetch users. Please try again later")
                )
            );
        }
        const user = users.find(us => us.username === username);
        if (!user) {
            store.dispatch(
                showError(
                    new Error("Could not find user. Please try again later.")
                )
            );
        } else if (
            user &&
            user.password &&
            user.password !== password &&
            user.username &&
            user.username === username
        ) {
            store.dispatch(
                showError(new Error("Username or password incorrect!"))
            );
        } else {
            store.dispatch(loadUser(user));
        }
    }
}

export const UserService = new User();
