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
  let Kettlebells = document.getElementById("Kettlebells").value+"";
  let Made_In_Brazil = document.getElementById("Made_In_Brazil").value+"";
  let Krav_Maga_Stay_Away = document.getElementById("Krav_Maga_Stay_Away").value+"";
  let Krav_Maga_Civilian = document.getElementById("Krav_Maga_Civilian").value+"";
  let Krav_Maga_Kiddy = document.getElementById("Krav_Maga_Kiddy").value+"";
  let Krav_Maga_Kids = document.getElementById("Krav_Maga_Kids").value+"";
  let Crossfit = document.getElementById("Crossfit").value+"";
  let TRX = document.getElementById("TRX").value+"";
  let Womens_corner = document.getElementById("Womens_corner").value+"";
  let Adaptive_gym = document.getElementById("Adaptive_gym").value+"";
  let Judo = document.getElementById("Judo").value+"";
  let sms = document.getElementById("sms").value+"";
  let receive_email = document.getElementById("receive_email").value+"";
  let payed = document.getElementById("payed").value+"";
  let payment_date = document.getElementById("payment_date").value;
  let test = "test";

  console.log("Got values succesfully");
  //console.log(shortid.generate());
  let newid = shortid.generate();
  //debugger;
  //test
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
            KVMGSTAW:Krav_Maga_Stay_Away,
            KVMGCV:Krav_Maga_Civilian,
            KA:Krav_Maga_Kiddy,
            KB:Krav_Maga_Kids,
            CF:Crossfit,
            TRX_:TRX,
            WC:Womens_corner,
            ADG:Adaptive_gym,
            Judo:Judo,
            sms:sms,
            receive_email:receive_email,
            payed:payed,
            payment_date:payment_date,
            testClass : {
                          Register:"Yes/No", 
                          Payments: {
                            Jan:"Yes/No",
                            Feb:"Yes/No"

                          }
                        }       
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
               <div className="col-xs-4"><button type="button" className="btn btn-default" onClick={this.saveValuesInStore.bind(this,this.props)}>Προσθήκη πελάτη</button></div>
             </div>
        </div>  {/*end of container*/}
      </div>

    );
  }
}

export default AddUser;
