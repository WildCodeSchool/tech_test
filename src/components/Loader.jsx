import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ title, user }) {
    return (
	<div style={{marginTop: "25px"}} className="d-flex justify-content-center">
	  <div className="spinner-border" role="status">
	    <span className="sr-only">Loading...</span>
	  </div>
	</div>
    );
}
