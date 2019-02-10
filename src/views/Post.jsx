import React from 'react';
import store from '../reducers';
import Comment from '../components/Comment.jsx';

export default class Post extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {
	    commentEmail: "",
	    commentName: "",
	    commentBody: "",
	    commentsData: null,
	    postTitle: "",
	    postBody: ""
	};

	this.getId = this.getId.bind(this);
	this.getPost = this.getPost.bind(this);
	this.displayCommentForm = this.displayCommentForm.bind(this);
	this.handleCommentEmailChange = this.handleCommentEmailChange.bind(this);
	this.handleCommentNameChange = this.handleCommentNameChange.bind(this);
	this.handlecommentBodyChange = this.handlecommentBodyChange.bind(this);
	this.getNextCommentId = this.getNextCommentId.bind(this);
	this.addComment = this.addComment.bind(this);
	this.handlePostTitleChange = this.handlePostTitleChange.bind(this);
	this.handlePostBodyChange = this.handlePostBodyChange.bind(this);
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
	var commentsData = store.getState().comments;
	this.setState({commentsData: commentsData});
	var post = this.getPost();
	this.setState({postTitle: post.title, postBody: post.body});
    }

    getId() {
	const urlElems = this.props.location.pathname.split('/');
	return urlElems[urlElems.length-1];
    }

    getPost() {
	var id = this.getId();
	return store.getState().posts.find((post) => post.id == id);
    }

    getAuthorName() {
	var post = this.getPost();
	var user = store.getState().users.find((user) => user.id == post.userId);
	return user.name;
    }

    displayComments(commentsData) {
	var comments = null;
	var postId = this.getId();
	if(commentsData)
	    comments = commentsData.map(function(commentData) {
		if(commentData.postId == postId)
		    return (
			<Comment key={commentData.id} id={commentData.id} name={commentData.name} body={commentData.body} email={commentData.email}></Comment>
		    );
		else
		    return null;
	    }, this);
	return comments;
    }

    isLoggedIn() {
	return store.getState().user.email;
    }

    displayCommentForm() {
	return (
	    <form>
	      <h2 style={{marginTop: '30px'}}>Would you like to comment?</h2>
		<div className="form-group">
		  <label htmlFor="commentEmail">Email address:</label>
		  <input value={this.state.commentEmail} onChange={this.handleCommentEmailChange} type="email" autoComplete="email" className="form-control" id="commentEmail"></input>
		</div>
		<div className="form-group">
		  <label htmlFor="commentName">Title:</label>
		  <input value={this.state.commentName} onChange={this.handleCommentNameChange} type="text" className="form-control" id="commentName"></input>
		</div>
		<div className="form-group">
		  <label htmlFor="commentBody">Your comment:</label>
		  <textArea value={this.state.commentBody} onChange={this.handlecommentBodyChange} className="form-control" id="commentBody"></textArea>
		</div>
		<button onClick={this.addComment} style={{background: "blue", color: "white"}} className="btn btn-default">Login</button>
	      </form>
	);
    }

    handleCommentEmailChange(e) {
	this.setState({commentEmail: e.target.value});
    }

    handleCommentNameChange(e) {
	this.setState({commentName: e.target.value});
    }

    handlecommentBodyChange(e) {
	this.setState({commentBody: e.target.value});
    }

    getNextCommentId() {
	let comments = store.getState().comments;
	return comments[comments.length-1].id+1;
    }

    addComment(e) {
	const id = this.getNextCommentId();
	const postId = this.getId();
	store.dispatch({ type: 'CREATE_COMMENT', id: id, postId: postId, email: this.state.commentEmail, name: this.state.commentName, body: this.state.commentBody});
	e.preventDefault();
    }

    handlePostTitleChange(e) {
	store.dispatch({ type: 'SET_POST', id: this.getId(), title: e.target.value, body: this.state.postBody});
    }
    
    handlePostBodyChange(e) {
		store.dispatch({ type: 'SET_POST', id: this.getId(), title: this.state.postTitle, body: e.target.value});
    }

    displayEditablePost() {
	var post = this.getPost();
	return (
	    <div>
	      <label htmlFor="postTitle">Title:</label>
	      <textarea value={this.state.postTitle} onChange={this.handlePostTitleChange} type="text" className="form-control" id="postTitle"></textarea>
	      <div style={{margin: '10px'}}><strong>Author: {this.getAuthorName()}</strong></div>
	      <label htmlFor="postBody">Body:</label>
	      <textarea value={this.state.postBody} onChange={this.handlePostBodyChange} className="form-control" rows="10" id="postBody"></textarea>
	    </div>
	);
    }

    displayReadonlyPost() {
	var post = this.getPost();
	return (
	    <div>
	      <h2 style={{textAlign: 'center'}}>{post.title}</h2>
	      <div style={{marginBottom: '10px'}}><strong>Author: {this.getAuthorName()}</strong></div>
	      <div>{post.body}</div>
	    </div>
	);
    }
    
    render() {
	return(
	    <div style={{height:'calc(100%)', padding:'20px'}}>
	      {this.isLoggedIn()?this.displayEditablePost():this.displayReadonlyPost()}
	      {this.isLoggedIn()?null:this.displayCommentForm()}

	      <h2 style={{marginTop: '30px'}}>Comments</h2>
	      {this.displayComments(this.state.commentsData)}
	    </div>
	);
    }
}
