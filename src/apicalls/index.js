import React from 'react';
import axios from 'axios';

export default class Apicalls {
    getPosts(cb) {
	axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(res) {
		cb(null, res);
            })
            .catch(function(err) {
                console.log(err);
                cb(err);
            });
    }
    getComments(cb) {
	axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function(res) {
		cb(null, res);
            })
            .catch(function(err) {
                console.log(err);
                cb(err);
            });
    }
    getUsers(cb) {
	axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res) {
		cb(null, res);
            })
            .catch(function(err) {
		console.log(err);
                cb(err);
            });
    }
};
