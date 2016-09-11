import React, { Component } from 'react';
import { Link } from 'react-router';


var Home = React.createClass({
  render: function () {
    return (
    <div className="container">
      <div className="row">
          <div className="col-xs-12">
            <h2>Καλωσήρθατε στην διαχείριση πελατών του FerrumGym</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <Link to="/login">Σύνδεση</Link>
          </div>
        </div>
    </div>
    )
  }
});

module.exports = Home;