import React from 'react';

export default class Comment extends React.Component {
    constructor(props, context) {
	super(props, context);
    }
    
    render () {
	return (
	    <div style={{border: "solid black 1px", marginTop: "10px", padding:'10px'}}>
	      <p><strong>{this.props.name}</strong></p>
	      <p><strong>Author: {this.props.email}</strong></p>
	      <p>{this.props.body}</p>
	    </div>
	);
    }
}
