import { ApiService } from "./api.service";

class Post {
    async createPost({ title, message, imageUrl }) {
        if (!title || !title.length || !message || !message.length) {
            return {
                error: new Error("You must provide a title and a message"),
                data: null
            };
        }

        const { data: created, error } = await ApiService.post("/posts", {
            title,
            message
        });
        if (created) {
            return { data: created, error: null };
        } else {
            return {
                data: null,
                error: new Error(
                    "Could not create a new post at this time. Try again later"
                )
            };
        }
    }

    getUserPosts(uid) {
        
    }
}
