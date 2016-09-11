import React, { Component, PropTypes } from 'react';

class DeleteForm extends Component {

  render() {
    return (
      <div> 
        <div className="container">
          <form role="form" id="my_form" className="col-xs-8">
          <fieldset>
            <legend>
              Αναζήτηση χρήστη προς διαγραφή
            </legend>
            <div className="form-group">
              <div className="row">
                  <div className="col-xs-4"><label>First Name: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                  <div className="col-xs-4"><label>Last Name:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
              </div>
              <div className="row">
                <div className="col-xs-4">{this.props.children}</div>
              </div>
            </div>   
          </fieldset>
           </form>
        </div>

      </div>
    );
  }
}

export default DeleteForm;
