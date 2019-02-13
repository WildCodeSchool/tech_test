import { ApiService } from "./api.service";

class Comment {
    async commentOnPost({ post, subject, message }) {
        const { comment, error } = await ApiService.post("/comments", {
            post,
            subject,
            message
        });

        if (comment) {
            return comment;
        } else return false;
    }
}

export const CommentService = new Comment();
