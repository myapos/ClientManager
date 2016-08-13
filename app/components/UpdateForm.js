import React, { Component, PropTypes } from 'react';

class UpdateForm extends Component {

  render() {
    return (
      <div> 
        <div>
          <form role="form" className="col-sm-4" id="my_form">
          
          <fieldset>
          <legend>
          Search fields
          </legend>
            <div className="form-group">
                  <div className="col-xs-4"><label>First Name: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                  <div className="col-xs-4"><label>Last Name:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
            </div>    
          </fieldset>
           </form>
        </div>

      </div>
    );
  }
}

export default UpdateForm;
