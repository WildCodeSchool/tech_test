import React from 'react';
import { Route, Link, Router, Switch } from 'react-router-dom';
import Posts from './Posts.jsx';
import Post from './Post.jsx';
import Login from './Login.jsx';

import Navbar from '../components/Navbar.jsx';

import store from '../reducers';
import Apicalls from '../apicalls';
import history from '../history';

export default class App extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {

	};

	this.render = this.render.bind(this);
	this.logout = this.logout.bind(this);
	this.back = this.back.bind(this);
    }

    componentDidMount() {
	var apicalls = new Apicalls();
	if(!store.getState().posts)
	    apicalls.getPosts(function(err, res) {
		if(!err)
		    store.dispatch({ type: 'SET_POSTS', posts: res.data});
	    });
	if(!store.getState().comments)
	    apicalls.getComments(function(err, res) {
		if(!err)
		    store.dispatch({ type: 'SET_COMMENTS', comments: res.data});
	    });
	if(!store.getState().users)
	    apicalls.getUsers(function(err, res) {
		if(!err)
		    store.dispatch({ type: 'SET_USERS', users: res.data});
	    });
	store.subscribe(this.render);
    }

    logout() {
	store.dispatch({ type: 'SET_USER', user: {} });
    }

    back() {
	history.goBack();
    }

    handleSearchChange(e) {
	store.dispatch({ type: 'SET_SEARCH', search: e.target.value });
    }
    
    render() {
	return(
	    <Router  history={history}>
	      <div style={{height:'100%'}}>
		<Navbar title={"Tech test"} user={store.getState().user} onLogout={this.logout} onBack={this.back} onSearchChange={this.handleSearchChange}></Navbar>
		<div style={{height:'55.97px'}}></div>
	        <div style={{height:'calc(100% - 55.97px)', overflow:'auto'}} className="scrollbar-deep-purple bordered-deep-purple thin">
		  <Switch>
		    <Route exact path="/" component={Posts} />
		    <Route exact path="/posts" component={Posts} />
		    <Route path="/posts/:id" component={Post} />
		    <Route path="/login" component={Login} />
		  </Switch>
		</div>
	      </div>
	    </Router>
	);
    }
}
