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
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Kettlebells" id="Kettlebells"/>Kettlebells <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Made_In_Brazil" id="Made_In_Brazil"/>Made In Brazil <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Krav_Maga" id="Krav_Maga"/>Krav Maga <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Civilian" id="Civilian"/>Civilian <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Kids_A" id="Kids_A"/>Kids A <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Kids_B" id="Kids_B"/>Kids B <br/></div>
                      </div>
                      <div className="row">
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Crossfit" id="Crossfit"/>Crossfit <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="TRX" id="TRX"/>TRX <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Womens_corner" id="Womens_corner"/>Women's corner <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="Adaptive_gym" id="Adaptive_gym"/>Adaptive gym <br/></div>
                      </div>  
                    </div>  
                    <div className="form-group"><legend>Επικοινωνία</legend>
                      <div className="row">
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="sms" id="sms"/>Receive sms? <br/></div>
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="receive_email" id="receive_email"/>Receive email? <br/></div>
                      </div>
                   </div>  
                   <div className="form-group"><legend>Πληρωμές</legend>
                      <div className="row">
                        <div className="col-xs-2"><input className="form-control" type="checkbox" name="payed" id="payed"/>Payed? <br/></div>
                        <div className="col-xs-4"><input className="form-control" type="date" name="payment_date" id="payment_date"/> Payment date: <br/></div>
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
