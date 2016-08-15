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
    width                 : '70%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    this.refs.subtitle.style.color = '#90A6AD';
    this.refs.closebtn.style.color = '#ED1F33';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  saveUpdatedValuesInStore: function(){
  let userupdt;

  const users = this.props.users;
  const userupdatefunc = this.props.userUpdate;

  console.log("hello from update savevalues");
  debugger;
  
  let fname = document.getElementById("updfname").value;
  let lname = document.getElementById("updlname").value;
  let email = document.getElementById("updemail").value;
  let mobile = document.getElementById("updmobile").value;
  let age = document.getElementById("updage").value;
  let gender = document.getElementById("updgender").value;
  let date = document.getElementById("upddate").value;
  //+"" is used to convert values in string and display them in web page
  let Kettlebells = document.getElementById("updKettlebells").value;
  let Made_In_Brazil = document.getElementById("updMade_In_Brazil").value;
  let Krav_Maga = document.getElementById("updKrav_Maga").value;
  let Civilian = document.getElementById("updCivilian").value;
  let Kids_A = document.getElementById("updKids_A").value;
  let Kids_B = document.getElementById("updKids_B").value;
  let Crossfit = document.getElementById("updCrossfit").value;
  let TRX = document.getElementById("updTRX").value;
  let Womens_corner = document.getElementById("updWomens_corner").value;
  let Adaptive_gym = document.getElementById("updAdaptive_gym").value;
  let sms = document.getElementById("sms").value;
  let receive_email = document.getElementById("receive_email").value;
  let payed = document.getElementById("payed").checked+"";
  let date_payment = document.getElementById("date_payment").value;

  console.log("Got values succesfully");
  //console.log(shortid.generate());
  let newid = this.props.userRow.id;
  //use the same id
  
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
            KVMG:Krav_Maga,
            CV:Civilian,
            KA:Kids_A,
            KB:Kids_B,
            CF:Crossfit,
            TRX_:TRX,
            WC:Womens_corner,
            ADG:Adaptive_gym,
            sms:sms,
            receive_email:receive_email,
            payed:payed,
            date_payment:date_payment 
        }
        debugger;
        var r = confirm("Are you sure to update user "+userupdt.first +" "+userupdt.last+"?");
              if (r == true) {
                  userupdatefunc(userupdt,users);
                  alert("User updated!");
              } else {
                  ;
              }
  
  //debugger;
  //return user;
  },
  handleChange: function(event) {
    document.getElementById(event.target.id).value=event.target.value;

  },
  render: function() {
    //debugger;
    const user = this.props.userRow;
    return (
      <div>
        <button className="btn btn-default"  onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
 
          
          
          <div className="container">
            <form >
            <div className="row">
              <div className="col-xs-6"><h2 ref="subtitle">Client Form</h2></div>
             </div>
            <div className="row">
                <div className="col-xs-6"> </div>
                <div className="col-xs-6"> <button ref="closebtn" id="close-btn" className="btn btn-default"  onClick={this.closeModal}>X</button></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> First Name : <input type='text' id="updfname" defaultValue={user.first} onChange={this.handleChange}/></div>
                <div className="col-xs-4"> Last Name :<input type='text' id="updlname" defaultValue={user.last} onChange={this.handleChange}/></div>
              </div>
              <div className="row">  
                <div className="col-xs-4"> Email : <input type='email' defaultValue={user.usremail} id="updemail" onChange={this.handleChange}/></div>
                <div className="col-xs-4"> Mobile: <input type='number' defaultValue={user.mob} id="updmobile" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Age: <input type='text' defaultValue={user.age} id="updage" onChange={this.handleChange}/></div> 
                <div className="col-xs-4"> Gender: <input type='text' defaultValue={user.sex} id="updgender" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Date: <input type='date' defaultValue={user.date} id="upddate" onChange={this.handleChange}/> </div>
                <div className="col-xs-4"> Kettlebells: <input type='text' defaultValue={user.kettl} id="updKettlebells" onChange={this.handleChange}/> </div>
              </div>
              <div className="row"> 
                <div className="col-xs-4"> Made_In_Brazil: <input type='text' defaultValue={user.MIB} id="updMade_In_Brazil" onChange={this.handleChange}/></div>
                <div className="col-xs-4">  Krav_Maga: <input type='text' defaultValue={user.KVMG} id="updKrav_Maga" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Civilian: <input type='text' defaultValue={user.CV} id="updCivilian" onChange={this.handleChange}/></div>
                <div className="col-xs-4"> Kids_A: <input type='text' defaultValue={user.KA} id="updKids_A" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Kids_B: <input type='text' defaultValue={user.KB} id="updKids_B" onChange={this.handleChange}/></div>
                <div className="col-xs-4"> Crossfit: <input type='text' defaultValue={user.CF} id="updCrossfit" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> TRX: <input type='text' defaultValue={user.TRX_} id="updTRX" onChange={this.handleChange}/></div>
                <div className="col-xs-4"> Womens_corner: <input type='text' defaultValue={user.WC} id="updWomens_corner" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Adaptive_gym: <input type='text' defaultValue={user.ADG} id="updAdaptive_gym" onChange={this.handleChange}/></div> 
                <div className="col-xs-4"> SMS: <input type='text' defaultValue={user.sms} id="sms" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Receive email?: <input type='text' defaultValue={user.receive_email} id="receive_email" onChange={this.handleChange}/> </div>
                <div className="col-xs-4">Payed: <input type='text' defaultValue={user.payed} id="payed" onChange={this.handleChange}/></div>
              </div>
              <div className="row">
                <div className="col-xs-4"> Payment date: <input type='date' defaultValue={user.date_payment} id="date_payment" onChange={this.handleChange}/> </div>
              </div>
              <div className="row">
                <div className="col-xs-4"> <button className="btn btn-default"  onClick={this.saveUpdatedValuesInStore}>Save</button></div>
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