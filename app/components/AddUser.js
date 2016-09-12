import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Form from './Form';
import shortid from 'shortid';

class AddUser extends Component {

  static propTypes = {
    adduser: PropTypes.func.isRequired,
  };

  componentDidMount (){
            () => this.refs.FormInput.getDOMNode().focus(); 
  }

saveValuesInStore(myprops){
  var user;

  console.log("hello from savevalues");
  //debugger;
  //get values from fields
  /**/
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let date = document.getElementById("date").value;
  //+"" is used to convert values in string and display them in web page
  let Kettlebells = document.getElementById("Kettlebells").checked+"";
  let Made_In_Brazil = document.getElementById("Made_In_Brazil").checked+"";
  let Krav_Maga = document.getElementById("Krav_Maga").checked+"";
  let Civilian = document.getElementById("Civilian").checked+"";
  let Kids_A = document.getElementById("Kids_A").checked+"";
  let Kids_B = document.getElementById("Kids_B").checked+"";
  let Crossfit = document.getElementById("Crossfit").checked+"";
  let TRX = document.getElementById("TRX").checked+"";
  let Womens_corner = document.getElementById("Womens_corner").checked+"";
  let Adaptive_gym = document.getElementById("Adaptive_gym").checked+"";
  let sms = document.getElementById("sms").checked+"";
  let receive_email = document.getElementById("receive_email").checked+"";
  let payed = document.getElementById("payed").checked+"";
  let payment_date = document.getElementById("payment_date").value;

  console.log("Got values succesfully");
  //console.log(shortid.generate());
  let newid = shortid.generate();
  //debugger;
  user = {  id:newid,
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
            payment_date:payment_date       
        }
        var r = confirm("Are you sure to add user "+user.first +" "+user.last+"?");
                      if (r == true) {
                          myprops.adduser(user);
                          alert("User added!");
                      } else {
                          ;
                      }
  
  //debugger;
  //return user;
  }

  render() {
  const {adduser} = this.props;
  //const {userdata} = this.saveValuesInStore;
  //debugger;
    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12"><Form ref="FormInput"></Form></div>
            </div>
            <div className="row">            
               <div className="col-xs-4"><button className="btn btn-default" onClick={this.saveValuesInStore.bind(this,this.props)}>Προσθήκη πελάτη</button></div>
             </div>
        </div>  {/*end of container*/}
      </div>

    );
  }
}

export default AddUser;
