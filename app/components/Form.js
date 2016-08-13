import React, { Component, PropTypes } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <div>
          <form role="form" className="col-sm-4" id="my_form">
          <fieldset>
          <legend>
          Input fields
          </legend>
            <div className="form-group">
                  <div className="col-xs-4"><label>First Name: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                  <div className="col-xs-4"><label>Last Name:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
                  <div className="col-xs-4"><label>Email: <input className="form-control" type="email" name="email" id="email"/> <br/></label></div>
                  <div className="col-xs-4"><label>Mobile: <input className="form-control" type="number" name="mobile" id="mobile"/> <br/></label></div>
                  <div className="col-xs-4"><label>Gender: <input className="form-control" type="text" name="gender" id="gender"/> <br/></label></div>
                  <div className="col-xs-4"><label>Age: <input className="form-control" type="text" name="age" id="age"/> <br/></label></div>
                  <div className="col-xs-4"><label>Date: <input className="form-control" type="date" name="date" id="date"/> <br/></label></div>
            </div>    
            <div className="form-group col-xs-6">Classes: 
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Kettlebells" id="Kettlebells"/>Kettlebells <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Made_In_Brazil" id="Made_In_Brazil"/>Made In Brazil <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Krav_Maga" id="Krav_Maga"/>Krav Maga <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Civilian" id="Civilian"/>Civilian <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Kids_A" id="Kids_A"/>Kids A <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Kids_B" id="Kids_B"/>Kids B <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Crossfit" id="Crossfit"/>Crossfit <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="TRX" id="TRX"/>TRX <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Womens_corner" id="Womens_corner"/>Women's corner <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="Adaptive_gym" id="Adaptive_gym"/>Adaptive gym <br/></div>
            </div>  
            <div className="form-group col-xs-6">Communication: 
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="sms" id="sms"/>Receive sms? <br/></div>
              <div className="col-xs-4"><input className="form-control" type="checkbox" name="receive_email" id="receive_email"/>Receive email? <br/></div>
           </div>  
           </fieldset>
           </form>
        </div>

      </div>
    );
  }
}

export default Form;
