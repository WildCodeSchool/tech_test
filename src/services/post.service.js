import { ApiService } from "./api.service";
import { store } from "..";
import { loadPosts, addPost } from "../redux/actions/posts";
import { showError } from "../redux/actions/errors.actions";

class Post {
    async createPost({ title, body, imageUrl, uid = null }) {
        const truth = !title || !title.length || !body || !body.length;
        if (!truth) {
            store.dispatch(
                showError(new Error("You must provide a title and a message"))
            );
        }

        const { data: created } = await ApiService.post("/posts", {
            title,
            body,
            imageUrl,
            user: uid
        });
        if (created) {
            store.dispatch(addPost(created));
        } else {
            store.dispatch(
                new Error(
                    "Could not create a new post at this time. Try again later"
                )
            );
        }
    }

    async getPosts(uid = null) {
        // get all posts
        let { data: posts } = await ApiService.get("/posts");

        // if no uid, remove all non anonymous
        // else, filter anonymous AND belonging to uid
        if (posts) {
            if (!uid) {
                posts = posts.filter(post => post.id === null);
            } else {
                posts = posts.filter(
                    post => post.id === null || post.id === uid
                );
            }
            store.dispatch(loadPosts(posts));
        } else {
            store.dispatch(
                showError(
                    new Error("Could not load posts. Please try again later")
                )
            );
        }
    }
}

export const PostService = new Post();
