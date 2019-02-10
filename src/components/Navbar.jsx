import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ title, user, onLogout, onBack, onSearchChange }) {
    var loginLogoutLink;
    var displayableTitle;
    // if user is not logged
    if(user.email) {
	displayableTitle = "Welcome "+user.email;
	loginLogoutLink = (
	    <li className="nav-item">
	      <NavLink className="nav-link" to="/posts" onClick={onLogout}>Logout</NavLink>
	    </li>
	);
    } else {
	displayableTitle = title;
	loginLogoutLink = (
	    <li className="nav-item">
	      <NavLink className="nav-link" to="/login">Login</NavLink>
	    </li>
	);
    }
    return (
	<nav style={{minHeight :"55px !important"}} className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
	  <button type="button" style={{marginRight:"15px"}} onClick={onBack} className="btn btn-primary">Back</button>
	  <NavLink className="navbar-brand" to="/posts">{ displayableTitle }</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item">
		<NavLink className="nav-link" to="/posts">Posts</NavLink>
	      </li>
	      {loginLogoutLink}
	    </ul>
	    <form className="form-inline my-2 my-md-0">
	      <input onChange={onSearchChange} className="form-control" type="text" placeholder="Search" />
	    </form>
          </div>
	</nav>
    );
}
