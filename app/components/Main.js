import React, { Component } from 'react';
import { Link } from 'react-router';
//import GetAllUsers from '../components/GetAllUsers';

export default class Main extends Component {
 
 
  render() {
    return (
      <div>
        <div>
          <h2>Hello from Main Control Panel</h2>
          <Link to="/">Logout</Link>
        </div>
        <Link to="/getallusers">GetAllUsers</Link><br/>
        <Link to="/adduser">AddUser</Link><br/>
        <Link to="/deleteuser">SearchOrDeleteUser</Link><br/>
        <Link to="/updateuser">UpdateUser</Link><br/>
        <Link to="/importusers">ImportUsers</Link><br/>
        <Link to="/exportusers">ExportUsers</Link>
        
      </div>
    );
  }
}

