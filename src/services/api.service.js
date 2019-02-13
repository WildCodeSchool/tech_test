import { client } from "../utils/client";

class Api {
    async post(path, payload) {
        return prettify(client.post(path, payload));
    }

    async get(path) {
        return prettify(await client.get(path));
    }

    async update(path, payload) {
        return prettify(client.put(path, payload));
    }

    async delete(path) {
        return prettify(client.delete(path));
    }
}

async function prettify(promise) {
    try {
        const response = await promise;
        return { data: response.data, error: null };
    } catch (error) {
        return { error, data: null };
    }
}

export const ApiService = new Api();
