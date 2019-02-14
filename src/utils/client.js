import axios from "axios";

export const client = axios.create({
    // headers: {
    //     "x-apiKey": "5c64d486f210985199db562c",
    //     "content-type": "application/json",
    //     "cache-control": "no-cache"
    // },
    // baseURL: "https://wildeschool-d197.restdb.io/rest"
    baseURL: "https://my-json-server.typicode.com/ngasst/wildschool"
});
