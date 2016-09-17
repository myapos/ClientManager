import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class UpdateForm extends Component {

  render() {
    return (
      <div> 
        <div className="container">
           <div className="row">
            <form role="form" className="col-xs-11" id="my_form">
              <fieldset>
                <legend>
                  Αναζήτηση πελάτη προς ενημέρωση
                </legend>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-4"><label>Όνομα: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                    <div className="col-xs-4"><label>Επώνυμο:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4">{this.props.children}</div>
                  </div>
                </div>    
              </fieldset>
             </form>
             <div className="col-xs-1 positionMainLink"> <Link to="/main">Πίσω</Link></div>
            </div>
        </div>

      </div>
    );
  }
}

export default UpdateForm;
