var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//import MyModalForm from './MyModalForm';
 
//var appElement = document.getElementById('your-app-element');
 
/*
By default the modal is anchored to document.body. All of the following overrides are available.
 
* element
Modal.setAppElement(appElement);
 
* query selector - uses the first element found if you pass in a class.
Modal.setAppElement('#your-app-element');
 
*/
 
const customStyles = {
  content : {
    top                   : '50%',
    width                 : '90%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'black'
  }
};
 
 
var MyModal = React.createClass({
 
  getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    //this.refs.subtitle.style.color = '#90A6AD';
    //this.refs.closebtn.style.color = '#90A6AD';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});//close modal
    //location.reload();//refresh
  },
  saveUpdatedValuesInStore: function(){
  let userupdt;

  const users = this.props.users;
  const userupdatefunc = this.props.userUpdate;

  console.log("hello from update savevalues");
  
  
  let fname = document.getElementById("updfname").value;
  let lname = document.getElementById("updlname").value;
  let email = document.getElementById("updemail").value;
  let mobile = document.getElementById("updmobile").value;
  let age = document.getElementById("updage").value;
  let gender = document.getElementById("updgender").value;
  let date = document.getElementById("upddate").value;
  //+"" is used to convert values in string and display them in web page
  let Kettlebells = document.getElementById("updKettlebells").value+"";
  let Made_In_Brazil = document.getElementById("updMade_In_Brazil").value+"";
  let Krav_Maga_Stay_Away = document.getElementById("updKrav_Maga_Stay_Away").value+"";
  let Civilian = document.getElementById("updKrav_Maga_Civilian").value+"";
  let Kids_A = document.getElementById("updKrav_Maga_Kiddy").value+"";
  let Kids_B = document.getElementById("updKrav_Maga_Kids").value+"";
  let Crossfit = document.getElementById("updCrossfit").value+"";
  let Judo = document.getElementById("updJudo").value+"";
  let TRX = document.getElementById("updTRX").value+"";
  let Womens_corner = document.getElementById("updWomens_corner").value+"";
  let Adaptive_gym = document.getElementById("updAdaptive_gym").value+"";
  let sms = document.getElementById("sms").value+"";
  //debugger;
  let tempObjString = JSON.parse(document.getElementById("tempObjString").innerHTML); 
  let payments = tempObjString.PaymentsMonths.Payments;
  //get register value
  let payed_test = document.getElementById("testkettlClass").value+"";
  tempObjString.Register = payed_test;
  //get selection and save PaymentsMonths???? reconstruct unPaidMonths objects with
  //selection of user
  debugger;
  var unPaidMonths = document.getElementsByClassName("unPaidMonths");
  //var cusid_ele = document.getElementsByClassName('custid');
  // unPaidMonths[0] has the value of months
  // unPaidMonths[1].value has the info of payment in that month
  //reconstruct that object
  let paymentsForMonths={};

  for (var i = 0; i < unPaidMonths.length; ++i) {
      //var item = unPaidMonths[i];  
      switch (i){
        case 0:

            console.log("unpaid months"+unPaidMonths[i].innerHTML);
            //paymentsForMonths[unPaidMonths[i].innerHTML] = {};

            break;
        case 1:

            console.log("unpaid months"+unPaidMonths[i].value);
            paymentsForMonths[unPaidMonths[i-1].innerHTML] = unPaidMonths[i].value;
            break;
      }
      console.log("paymentsForMonths:");
      console.log(paymentsForMonths);

  }
  let testkettlClass = tempObjString;
  testkettlClass.PaymentsMonths.Payments = paymentsForMonths;
  let receive_email = document.getElementById("receive_email").value+"";
  let payed = document.getElementById("payed").value+"";
  let payment_date = document.getElementById("payment_date").value;

  console.log("Got values succesfully");
  //console.log(shortid.generate());
  let newid = this.props.userRow.id;
  //use the same id
  //debugger;
  userupdt = {  
            id:newid,
            first: fname,
            last:lname,
            usremail:email,
            mob:mobile,
            age:age,
            sex:gender,
            date:date,
            kettl:Kettlebells,
            MIB:Made_In_Brazil,
            KVMGSTAW:Krav_Maga_Stay_Away,
            KVMGCV:Civilian,
            KA:Kids_A,
            KB:Kids_B,
            Judo:Judo,
            CF:Crossfit,
            TRX_:TRX,
            WC:Womens_corner,
            ADG:Adaptive_gym,
            sms:sms,
            testkettlClass:testkettlClass,
            receive_email:receive_email,
            payed:payed,
            payment_date:payment_date 
        }
        //debugger;
        var r = confirm("Are you sure to update user "+userupdt.first +" "+userupdt.last+"?");
              if (r == true) {
                  userupdatefunc(userupdt,users);
                  alert("User updated!");
              } else {
                  ;
              }
  },
  handleChange: function(event) {
    document.getElementById(event.target.id).value=event.target.value;

  },
  render: function() {
    
    const user = this.props.userRow;
    let temp = {};
    temp = JSON.parse(user.testkettlClass);
    //loop over object and take all payments equal to "No"
    debugger;
    let payments = {};
    (typeof(user.testkettlClass)!="undefined") ?  (payments = temp.PaymentsMonths.Payments) : (payments ={});
    let unpaidMonths = {};
    for (let months in payments) {
        if (payments[months]=="Όχι"){
            unpaidMonths[months] = payments[months];
        }   
    };
    let rand = require('unique-random')(1, 1000);
    for (var unpmonth in unpaidMonths) {
         console.log("month:" + unpmonth + " = " + unpaidMonths[unpmonth]);
    };
   
    //user.test = temp;
    return (
      <div>
        <button id="btnupdate" type="button" className="btn btn-default"  onClick={this.openModal}>Επεξεργασία</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className="container">
            <form>
             <div className="row">
                <div className="col-xs-7"><legend id="legendUpdt" ref="subtitle">Καρτέλα πελάτη</legend></div>
                <div className="col-xs-1"> <button type="button" ref="closebtn" id="close-btn" className="btn btn-default positionModalLink"  onClick={this.closeModal}>X</button></div>
             </div>
             <div className="row">
                <div className="col-xs-3"> <span className="clientinfo"> Όνομα : </span><input className="form-control selectwidthauto" type='text' id="updfname" defaultValue={user.first} onChange={this.handleChange}/></div>
                <div className="col-xs-3"> <span className="clientinfo"> Επώνυμο :</span><input className="form-control selectwidthauto" type='text' id="updlname" defaultValue={user.last} onChange={this.handleChange}/></div> 
                <div className="col-xs-3"><span className="clientinfo"> Email : </span><input className="form-control selectwidthauto" type='email' defaultValue={user.usremail} id="updemail" onChange={this.handleChange}/></div>
                <div className="col-xs-3"><span className="clientinfo"> Κινητό: </span><input className="form-control selectwidthauto" type='number' defaultValue={user.mob} id="updmobile" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-3"><span className="clientinfo"> Ηλικία: </span><input className="form-control selectwidthauto" type='number' defaultValue={user.age} id="updage" onChange={this.handleChange}/></div> 
                <div className="col-xs-3"><span className="clientinfo"> Φύλλο: </span>
                  <select className="form-control selectwidthauto" id="updgender">
                      <option value={user.sex}>{user.sex}</option>
                      <option value={(user.sex=="Θήλυ")?"Άρρεν":"Θήλυ"}>{(user.sex=="Θήλυ")?"Άρρεν":"Θήλυ"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo">  Kettlebells: </span>
                  <select className="form-control selectwidthauto" id="updKettlebells">
                      <option value={user.kettl}>{user.kettl}</option>
                      <option value={(user.kettl=="Ναι")?"Όχι":"Ναι"}>{(user.kettl=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Made In Brazil: </span>
                  <select className="form-control selectwidthauto" id="updMade_In_Brazil">
                      <option value={user.MIB}>{user.MIB}</option>
                      <option value={(user.MIB=="Ναι")?"Όχι":"Ναι"}>{(user.MIB=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                </div>
              <div className="row">
                <div className="col-xs-3"><span className="clientinfo"> Kravmaga Stay Away: </span>
                  <select className="form-control selectwidthauto" id="updKrav_Maga_Stay_Away">
                      <option value={user.KVMGSTAW}>{user.KVMGSTAW}</option>
                      <option value={(user.KVMGSTAW=="Ναι")?"Όχι":"Ναι"}>{(user.KVMGSTAW=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>            
                <div className="col-xs-3"><span className="clientinfo"> Krav Maga Civilian: </span>
                  <select className="form-control selectwidthauto" id="updKrav_Maga_Civilian">
                      <option value={user.KVMGCV}>{user.KVMGCV}</option>
                      <option value={(user.KVMGCV=="Ναι")?"Όχι":"Ναι"}>{(user.KVMGCV=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Krav Maga Kiddy: </span>
                  <select className="form-control selectwidthauto" id="updKrav_Maga_Kiddy">
                      <option value={user.KA}>{user.KA}</option>
                      <option value={(user.KA=="Ναι")?"Όχι":"Ναι"}>{(user.KA=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Krav Maga Kids: </span>
                  <select className="form-control selectwidthauto" id="updKrav_Maga_Kids">
                        <option value={user.KB}>{user.KB}</option>
                        <option value={(user.KB=="Ναι")?"Όχι":"Ναι"}>{(user.KB=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                </div>
              <div className="row">
                <div className="col-xs-3"><span className="clientinfo"> Judo: </span>
                  <select className="form-control selectwidthauto" id="updJudo">
                      <option value={user.Judo}>{user.Judo}</option>
                      <option value={(user.Judo=="Ναι")?"Όχι":"Ναι"}>{(user.Judo=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Crossfit: </span>
                  <select className="form-control selectwidthauto" id="updCrossfit">
                    <option value={user.CF}>{user.CF}</option>
                    <option value={(user.CF=="Ναι")?"Όχι":"Ναι"}>{(user.CF=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> TRX: </span>
                  <select className="form-control selectwidthauto" id="updTRX">
                    <option value={user.TRX_}>{user.TRX_}</option>Ναι
                    <option value={(user.TRX_=="Ναι")?"Όχι":"Ναι"}>{(user.TRX_=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Womens_corner:</span>
                  <select className="form-control selectwidthauto" id="updWomens_corner">
                    <option value={user.WC}>{user.WC}</option>
                    <option value={(user.WC=="Ναι")?"Όχι":"Ναι"}>{(user.WC=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3"><span className="clientinfo"> Adaptive_gym: </span>
                  <select className="form-control selectwidthauto" id="updAdaptive_gym">
                    <option value={user.ADG}>{user.ADG}</option>
                    <option value={(user.ADG=="Ναι")?"Όχι":"Ναι"}>{(user.ADG=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div> 
                <div className="col-xs-3"><span className="clientinfo"> SMS: </span>
                  <select className="form-control selectwidthauto" id="sms">
                      <option value={user.sms}>{user.sms}</option>
                      <option value={(user.sms=="Ναι")?"Όχι":"Ναι"}>{(user.sms=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Λήψη email?: </span> 
                  <select className="form-control selectwidthauto" id="receive_email">
                      <option value={user.receive_email}>{user.receive_email}</option>
                      <option value={(user.receive_email=="Ναι")?"Όχι":"Ναι"}>{(user.receive_email=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-3"><span className="clientinfo"> Πληρωμή: </span>
                  <select className="form-control selectwidthauto" id="payed">
                      <option value={user.payed}>{user.payed}</option>
                      <option value={(user.payed=="Ναι")?"Όχι":"Ναι"}>{(user.payed=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div> 
              </div>
              <div className="row">
                <div className="col-xs-2"><span className="clientinfo"> Δοκιμαστικό τμήμα: </span>
                 <div className="doNotDisplay" id="tempObjString">{JSON.stringify(temp)}</div>
                  <select className="form-control selectwidthauto" id="testkettlClass">doNotDisplay
                      <option value={temp.Register}>{temp.Register}</option>
                      <option value={(temp.Register=="Ναι")?"Όχι":"Ναι"}>{(temp.Register=="Ναι")?"Όχι":"Ναι"}</option>
                  </select>
                </div>
                <div className="col-xs-2"><span className="clientinfo"> Πληρωμές: </span>
                  <div className="users_table_update table-responsive">
                    <table className="payment_table table table-bordered">
                        <thead>
                            <tr>
                              <th> Μήνας
                              </th>
                              <th> Πληρωμή
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            Object.keys(unpaidMonths).map(function(month) {
                            return (
                              <tr key={rand()}>
                                <td className="unPaidMonths">{month}</td> 
                                <td>
                                  <select className="unPaidMonths form-control selectwidthauto" id="testkettlClassPayments">
                                    <option value={unpaidMonths[month]}>{unpaidMonths[month]}</option>
                                    <option value={(unpaidMonths[month]=="Ναι")?"Όχι":"Ναι"}>{(unpaidMonths[month]=="Ναι")?"Όχι":"Ναι"}</option>
                                </select>
                                </td>
                                </tr>);
                            })
                          }
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6"><span className="clientinfo"> Ημερομηνία πληρωμής: </span>
                  <input type='date' defaultValue={user.payment_date} id="payment_date" onChange={this.handleChange}/> 
                </div>
                <div className="col-xs-6"><span className="clientinfo"> Ημερομηνία εγγραφής: </span>
                  <input type='date' defaultValue={user.date} id="upddate" onChange={this.handleChange}/> 
                </div>
              </div>{/* */}
              <div className="row">
                <div className="col-xs-4"> 
                  <button type="button" className="btn btn-default"  onClick={this.saveUpdatedValuesInStore}>Αποθήκευση</button>
                </div>
              </div>
           
            </form>

          </div>
          
        </Modal>
        
      </div>
    );
  }
});

module.exports = MyModal;
//ReactDOM.render(<App/>, appElement);