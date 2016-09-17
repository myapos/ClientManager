import React, { Component } from 'react';
import { Link } from 'react-router';
//import GetAllUsers from '../components/GetAllUsers';

export default class Main extends Component {
 
 
  render() {
    return (
        <div>
          
          <div className="container">
              <div className="row">
                <div className="col-xs-11"> <legend> Πίνακας Ελέγχου</legend></div>
                <div className="col-xs-1 positionLogoutLink"> <Link to="/">Αποσύνδεση</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-12"> <Link to="/getallusers">Πελατολόγιο</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-12"> <Link to="/adduser">Προσθήκη πελάτη</Link></div>
              </div>
              <div className="row"> 
                <div className="col-xs-12"> <Link to="/deleteuser">Διαγραφή πελάτη</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-12"> <Link to="/updateuser">Αναζήτηση - ενημέρωση πελάτη</Link></div>
              </div>
              <div className="row">
                <div className="col-xs-12"> <Link to="/importusers">Εισαγωγή πελατών</Link></div>
              </div>
              <div className="row">
                 <div className="col-xs-12"> <Link to="/exportusers">Εξαγωγή πελατών</Link></div>
              </div>
          </div>
      </div>

    );
  }
}

