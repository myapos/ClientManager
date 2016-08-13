import React, { Component } from 'react';
import { Link } from 'react-router';


var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <h2>Welcome to ClientManager Application sdfds</h2>
            <Link to="/login">Go to Login page</Link>
        </div>
      </div>
    )
  }
});

module.exports = Home;