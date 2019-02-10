import React from 'react';
import store from '../reducers';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {
	    email: "",
	    password: ""
	};

	this.login = this.login.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.render = this.render.bind(this);
    }

    componentDidMount() {
	store.subscribe(this.render);
    }

    login() {
	store.dispatch({ type: 'SET_USER', user: {id: 1000, email: this.state.email} });
    }
    handleEmailChange(e) {
	this.setState({email: e.target.value});
    }
    handlePasswordChange(e) {
	this.setState({password: e.target.value});	
    }
    
    render() {
	return(
	    <div style={{height:'calc(100%)'}}>
	      {this.state.email}
	      <form>
		<div className="form-group">
		  <label htmlFor="email">Email address:</label>
		  <input value={this.state.email} onChange={this.handleEmailChange} type="email" autoComplete="email" className="form-control" id="email"></input>
		</div>
		<div className="form-group">
		  <label htmlFor="pwd">Password:</label>
		  <input value={this.state.password} onChange={this.handlePasswordChange} type="password" autoComplete="current-password" className="form-control" id="pwd"></input>
		</div>
		<Link to="/posts" onClick={this.login}>
		  <button type="submit" style={{background: "blue", color: "white"}} className="btn btn-default">Login</button>
		</Link>
	      </form>
	    </div>
	);
    }
}
