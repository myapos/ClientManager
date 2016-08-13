import React, { Component } from 'react';
import { Link, Router, Route } from 'react-router';


var Login = React.createClass({

contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  auth: function(){
  	const username = 'myapos';
  	const password = 'myapos';
  	console.log("mini authentication process");

  	//get values from fields
  	let usrnValue = document.getElementById("usrnm").value;
  	let psrwdValue = document.getElementById("pswrd").value;

  	console.log(usrnValue+" "+psrwdValue);
  	/* */
  	if ((usrnValue==username)&&(psrwdValue==password)){
  		this.context.router.push('/main');
  	}
  	else {
  	alert("Please try again with right credentials");
  }
  	
  },
  render: function () {
    return (
    <div>
      <h2>Hello from Login</h2> <br/>
      <form role="form">
	      	<div className="form-group">
			  <div className="col-xs-4">Username: <input className="form-control" type="text" id="usrnm"/> <br/></div>
			  <div className="col-xs-4">Password: <input className="form-control" type="text" id="pswrd"/> <br/></div>
			  <button className="btn btn-default" onClick={this.auth}>Login</button> <br/>
			</div>
	  </form>
      <Link to="/">Go to Home</Link>
    </div>
    )
  }
});

module.exports = Login;