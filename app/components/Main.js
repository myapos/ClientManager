import React, { Component } from 'react';
import { Link } from 'react-router';
//import GetAllUsers from '../components/GetAllUsers';

export default class Main extends Component {
 
 
  render() {
    return (
        <div>
          
          <div className="container">
              <div className="row">
                <div className="col-xs-8"> <h2>Πίνακας Ελέγχου</h2></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/getallusers">Πελατολόγιο</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/adduser">Προσθήκη πελάτη</Link></div>
              </div>
              <div className="row"> 
                <div className="col-xs-2"> <Link to="/deleteuser">Διαγραφή πελάτη</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/updateuser">Ενημέρωση πελάτη</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-2"> <Link to="/importusers">Εισαγωγή πελατών</Link></div>
              </div>
              <div className="row">
                 <div className="col-xs-2"> <Link to="/exportusers">Εξαγωγή πελατών</Link></div>
              </div>
              <div className="row">
                 <div className="col-xs-2"> <Link to="/">Αποσύνδεση</Link></div>
              </div>
          </div>
      </div>

    );
  }
}

