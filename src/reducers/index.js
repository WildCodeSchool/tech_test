import { createStore } from 'redux';

const store = (store = {user: {}}, action) => {
    switch (action.type) {
    case 'SET_USER':
	store.user = action.user;
	return store;
    case 'SET_USERS':
	store.users = action.users;
	return store;
    case 'SET_POSTS':
	store.posts = action.posts;
	return store;
    case 'SET_SEARCH':
	store.search = action.search;
	return store;
    case 'DELETE_POST':
	store.posts = store.posts.filter(post => post.id !== action.id);
	return store;
    case 'CREATE_POST':
	let posts = store.posts;
	posts.push({
	    id: action.id,
	    userId: store.user.id,
	    title: "title",
	    body: "body"
	});
	return store;
    case 'SET_POST':
	store.posts = store.posts.map(function(post) {
	    if(post.id == action.id) {
		return {
		    id: action.id,
		    userId: post.userId,
		    title: action.title,
		    body: action.body
		};
	    }
	    else
		return post;
	});
	return store;
    case 'SET_COMMENTS':
	store.comments = action.comments;
	return store;
    case 'CREATE_COMMENT':
	let comments = store.comments;
	comments.push({
	    id: action.id,
	    postId: action.postId,
	    email: action.email,
	    name: action.name,
	    body: action.body
	});
	return store;
    default:
	return store;
    }
};

export default createStore(store);
