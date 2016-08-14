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
      <div className="container">
          <div className="row">
            <div className="col-xs-6"><h2>Hello from Login</h2></div>
          </div>
      </div>
      <form role="form" className="form-inline">
        <div className="form-group">
            <div className="container">
                <div className="row">
                  <div className="col-xs-2">Username: <input className="form-control" type="text" id="usrnm"/> </div>
                  <div className="col-xs-2">Password: <input className="form-control" type="text" id="pswrd"/> </div>
                </div> 
                <div className="row">
                  <div className="col-xs-2"> <button className="btn btn-default" onClick={this.auth}>Login</button> </div>
                </div>
                <div className="row">
                  <div className="col-xs-2"> <Link to="/">Go to Home</Link>
                </div>
              </div>
            </div>
        </div> {/*end of form container*/}
      </form> 
    </div>
    )
  }
});

module.exports = Login;