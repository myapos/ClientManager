import React, { Component } from 'react';
import { Link } from 'react-router';
//import GetAllUsers from '../components/GetAllUsers';

export default class Main extends Component {
 
 
  render() {
    return (
        <div>
          
          <div className="container">
              <div className="row">
                <div className="col-xs-8"> <h2>Hello from Main Control Panel</h2></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/getallusers">GetAllUsers</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/adduser">AddUser</Link></div>
              </div>
              <div className="row"> 
                <div className="col-xs-2"> <Link to="/deleteuser">DeleteUser</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/updateuser">UpdateUser</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/importusers">ImportUsers</Link></div>
              </div>
              <div className="row">
                 <div className="col-xs-2"> <Link to="/exportusers">ExportUsers</Link></div>
              </div>
              <div className="row">
                 <div className="col-xs-2"> <Link to="/">Logout</Link></div>
              </div>
          </div>
      </div>

    );
  }
}

