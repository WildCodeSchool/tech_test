import React from 'react';
import { Link } from 'react-router-dom';

export default class AbstractPost extends React.Component {
    constructor(props, context) {
	super(props, context);

	this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
	this.props.onDelete(this.props.id);
    }

    displayButtons() {
	if(this.props.user.email)
	    return (
		<div>
		  <Link to={"/posts/"+this.props.id} onClick={this.login}>
		    <button type="button" className="btn btn-primary">Edit</button>
		  </Link>
		  <button style={{marginLeft:'10px'}} onClick={this.handleDelete} type="button" className="btn btn-primary">Delete</button>
		</div>
	    );
	else
	    return (
		<div>
		  <Link to={"/posts/"+this.props.id} onClick={this.login}>
		    <button type="button" className="btn btn-primary">Read more</button>
		  </Link>
		</div>
	    );
    }
    
    render () {
	return (
	    <div style={{border: "solid black 1px", marginTop: "10px", padding:'10px'}}>
	      <h4>{this.props.title}</h4>
	      <p>{this.props.body.length > 80?this.props.body.substring(0,80)+'...':this.props.body}</p>
	      {this.displayButtons()}
	    </div>
	);
    }
}
