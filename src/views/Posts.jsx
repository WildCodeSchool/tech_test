import React from 'react';
import store from '../reducers';
import Apicalls from '../apicalls';
import history from '../history';

import AbstractPost from '../components/AbstractPost.jsx';
import Loader from '../components/Loader.jsx';

export default class Posts extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {
	    search: ""
	};

	this.render = this.render.bind(this);
	this.deletePost = this.deletePost.bind(this);
	this.getNextId = this.getNextId.bind(this);
	this.createPost = this.createPost.bind(this);
	this.updateLocalState = this.updateLocalState.bind(this);
    }

    componentDidMount() {
	this.updateLocalState();
	this.unsubscribe = store.subscribe(this.updateLocalState);
    }
    
    componentWillUnmount() {
	this.unsubscribe();
    }

    updateLocalState() {
	this.setState({search: store.getState().search});
	this.render();
    }

    deletePost(id) {
	store.dispatch({ type: 'DELETE_POST', id: id });
    }

    getNextId() {
	let posts = store.getState().posts;
	return posts[posts.length-1].id+1;
    }

    createPost() {
	const id = this.getNextId();
	store.dispatch({ type: 'CREATE_POST', id: id });
	history.push('/posts/'+id);
    }

    displayPosts(postsData) {
	var posts = null;
	var search = this.state.search;
	if(postsData)
	    posts = postsData.map(function(postData) {
		if(!search || search === "" || postData.title.includes(search))
		    return (
			<AbstractPost key={postData.id} id={postData.id} title={postData.title} body={postData.body} writerId={postData.userId} user={store.getState().user} onDelete={this.deletePost}></AbstractPost>
		    );
		else
		    return null;
	    }, this);
	return posts;
    }

    isLoggedIn() {
	return store.getState().user.email;
    }
    
    render() {
	var postsData = store.getState().posts;
	var addPostButton = null;
	if(this.isLoggedIn())
	    addPostButton = <button onClick={this.createPost} style={{position:'fixed', bottom:'15px', right:'25px'}} type="button" className="btn btn-primary">NEW POST</button>;
	return(
	    <div style={{height:'calc(100%)'}}>
	      {addPostButton}
	      {postsData?this.displayPosts(postsData):<Loader />}
	    </div>
	);
    }
}
