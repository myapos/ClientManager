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
                          <div className="col-xs-2"><label>Όνομα: <input className="form-control" type="text" name="fname" id="fname"/> <br/></label></div>
                          <div className="col-xs-2"><label>Επώνυμο:<input className="form-control" type="text" name="lname" id="lname"/> <br/></label></div>
                          <div className="col-xs-2"><label>Email: <input className="form-control" type="email" name="email" id="email"/> <br/></label></div>
                          <div className="col-xs-2"><label>Κινητό: <input className="form-control" type="number" name="mobile" id="mobile"/> <br/></label></div>
                          <div className="col-xs-2">
                          <label>Φύλλο: 
                              <select className="form-control selectwidthauto" name="gender" id="gender">
                                  <option value="Άρρεν">Άρρεν</option>
                                  <option value="Θήλυ">Θήλυ</option>
                              </select>
                          </label>
                          </div>
                          <div className="col-xs-2"><label>Ηλικία: <input className="form-control" type="number" name="age" id="age"/> <br/></label></div>
                      </div>
                      <div className="row">   
                          <div className="col-xs-4"><label>Ημερομηνία: <input className="form-control" type="date" name="date" id="date"/> <br/></label></div>
                      </div>
                    </div>    
                    <div className="form-group"><legend>Τμήματα</legend>
                      <div className="row"> 
                        <div className="col-xs-2">
                          <label>Kettlebells:
                              <select className="form-control selectwidthauto" name="Kettlebells" id="Kettlebells">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-2">
                        <label>Made In Brazil:
                              <select className="form-control selectwidthauto" name="Made_In_Brazil" id="Made_In_Brazil">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label>
                        </div>
                        <div className="col-xs-2">
                        <label>Krav Maga Stay Away:
                              <select className="form-control selectwidthauto" name="Krav_Maga_Stay_Away" id="Krav_Maga_Stay_Away">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label>
                        </div>
                        <div className="col-xs-2">
                        <label>Krav Maga Civilian:
                              <select className="form-control selectwidthauto" name="Krav_Maga_Civilian" id="Krav_Maga_Civilian">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label>
                        </div>
                        <div className="col-xs-2">
                        <label>Krav Maga Kiddy:
                              <select className="form-control selectwidthauto" name="Krav_Maga_Kiddy" id="Krav_Maga_Kiddy">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label>
                        </div>
                        <div className="col-xs-2"><label>Krav Maga Kids:
                              <select className="form-control selectwidthauto" name="Krav_Maga_Kids" id="Krav_Maga_Kids">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-2"><label>Crossfit:
                              <select className="form-control selectwidthauto" name="Crossfit" id="Crossfit">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-2"><label>TRX:
                              <select className="form-control selectwidthauto" name="TRX" id="TRX">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-2"><label>Women's corner:
                              <select className="form-control selectwidthauto" name="Womens_corner" id="Womens_corner">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-2"><label>Adaptive gym:
                              <select className="form-control selectwidthauto" name="Adaptive_gym" id="Adaptive_gym">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-2"><label>Judo:
                              <select className="form-control selectwidthauto" name="Judo" id="Judo">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                      </div>  
                    </div>  
                    <div className="form-group"><legend>Επικοινωνία</legend>
                      <div className="row">
                        <div className="col-xs-2"><label>Λήψη sms?:
                               <select className="form-control selectwidthauto" name="sms" id="sms">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label></div>
                        <div className="col-xs-2"><label>Λήψη email?:
                              <select className="form-control selectwidthauto" name="receive_email" id="receive_email">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                        </label></div>
                      </div>
                   </div>  
                   <div className="form-group"><legend>Πληρωμές</legend>
                      <div className="row">
                        <div className="col-xs-2">
                          <label>Πληρωμή?:
                              <select className="form-control" name="payed" id="payed">
                                  <option value="Ναι">Ναι</option>
                                  <option value="Όχι">Όχι</option>
                              </select>
                          </label>
                        </div>
                        <div className="col-xs-4"><label>Ημερομηνία πληρωμής:<input className="form-control" type="date" name="payment_date" id="payment_date"/><br/></label></div>
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
