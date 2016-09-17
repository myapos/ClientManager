import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Form extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="container">
          <div className="row">
              <form role="form" id="my_form" className="col-xs-11">
                <fieldset>
                  <legend>Συμπληρώστε τα πεδία εγγραφής</legend>
                    <div className="form-group">
                      <div className="row">
                          <div className="col-xs-2"><label>First Name: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                          <div className="col-xs-2"><label>Last Name:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
                          <div className="col-xs-2"><label>Email: <input className="form-control" type="email" name="email" id="email"/> <br/></label></div>
                          <div className="col-xs-2"><label>Mobile: <input className="form-control" type="number" name="mobile" id="mobile"/> <br/></label></div>
                          <div className="col-xs-2"><label>Gender: <input className="form-control" type="text" name="gender" id="gender"/> <br/></label></div>
                          <div className="col-xs-2"><label>Age: <input className="form-control" type="text" name="age" id="age"/> <br/></label></div>
                      </div>
                      <div className="row">   
                          <div className="col-xs-4"><label>Date: <input className="form-control" type="date" name="date" id="date"/> <br/></label></div>
                      </div>
                    </div>    
                    <div className="form-group"><legend>Τμήματα</legend>
                      <div className="row"> 
                        <div className="col-xs-2"><label>Kettlebells:<input className="form-control" type="checkbox" name="Kettlebells" id="Kettlebells"/> <br/></label></div>
                        <div className="col-xs-2"><label>Made In Brazil:<input className="form-control" type="checkbox" name="Made_In_Brazil" id="Made_In_Brazil"/><br/></label></div>
                        <div className="col-xs-2"><label>Krav Maga:<input className="form-control" type="checkbox" name="Krav_Maga" id="Krav_Maga"/><br/></label></div>
                        <div className="col-xs-2"><label>Civilian:<input className="form-control" type="checkbox" name="Civilian" id="Civilian"/><br/></label></div>
                        <div className="col-xs-2"><label>Kids A:<input className="form-control" type="checkbox" name="Kids_A" id="Kids_A"/><br/></label></div>
                        <div className="col-xs-2"><label>Kids B:<input className="form-control" type="checkbox" name="Kids_B" id="Kids_B"/><br/></label></div>
                      </div>
                      <div className="row">
                        <div className="col-xs-2"><label>Crossfit:<input className="form-control" type="checkbox" name="Crossfit" id="Crossfit"/><br/></label></div>
                        <div className="col-xs-2"><label>TRX:<input className="form-control" type="checkbox" name="TRX" id="TRX"/><br/></label></div>
                        <div className="col-xs-2"><label>Women's corner:<input className="form-control" type="checkbox" name="Womens_corner" id="Womens_corner"/><br/></label></div>
                        <div className="col-xs-2"><label>Adaptive gym:<input className="form-control" type="checkbox" name="Adaptive_gym" id="Adaptive_gym"/><br/></label></div>
                      </div>  
                    </div>  
                    <div className="form-group"><legend>Επικοινωνία</legend>
                      <div className="row">
                        <div className="col-xs-2"><label>Receive sms?:<input className="form-control" type="checkbox" name="sms" id="sms"/><br/></label></div>
                        <div className="col-xs-2"><label>Receive email?:<input className="form-control" type="checkbox" name="receive_email" id="receive_email"/><br/></label></div>
                      </div>
                   </div>  
                   <div className="form-group"><legend>Πληρωμές</legend>
                      <div className="row">
                        <div className="col-xs-2"><label>Payed?:<input className="form-control" type="checkbox" name="payed" id="payed"/><br/></label></div>
                        <div className="col-xs-4"><label>Payment date:<input className="form-control" type="date" name="payment_date" id="payment_date"/><br/></label></div>
                      </div>
                     </div>
                   </fieldset>
               </form>
               <div className="col-xs-1 positionMainLink"> <Link to="/main">Πίσω</Link></div>
            </div>
          </div> {/*end of container*/}
        </div>

      </div>
    );
  }
}

export default Form;
