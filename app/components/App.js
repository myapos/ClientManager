import React, { Component, PropTypes } from 'react';
import MySignature from './Signature';

export default class App extends Component {

componentDidUpdate(){
	this.checkInterval();
	//check if checkPeriodInMinutes has passed
};


// initializations --> Period = CurrTime - StartTime. StartTime has to be saved manually
// localStorage.setItem("StartTime", new Date().getTime());
// saved in localStorage. This will be updated every time the checkPeriodInMilliSeconds 
// passes.

checkInterval(){

const checkPeriodInMilliSeconds = 10080000;
//const checkPeriodInMilliSeconds = 5000; // checkPeriodInMinutes stands for the period in ms that has to be passed between
										// mail sendings 10080000


let StartTime = JSON.parse(localStorage.getItem("StartTime"));
let CurrTime = new Date().getTime();
let period = CurrTime - StartTime;
console.log("StartTime:"+StartTime);
console.log("period:"+period);

// if checkPeriodInMilliSeconds passes then swap CurrTime and StartTime
if (period>checkPeriodInMilliSeconds){
	console.log("Period passed. Save currtime as new start time in localStorage");
	localStorage.setItem("StartTime", CurrTime);
	//call mycheck to send emails this.mycheck();
	this.mycheck();
}


}


mycheck(){
    debugger;
    
    console.log("hey from check");
    //get users from local storage and check
    let previoususers = JSON.parse(localStorage.getItem("users"));
    //get current date and date from previous users
    let today = new Date();
    let userDate;

	//get how many users exist in the system
	let numOfUsers = previoususers.length;
	let userDates = new Array();
	let diffUserDates = new Array();

	for (let i=0;i<numOfUsers;i++){
		userDate = new Date(previoususers[i].date); 
		var timeDiff = Math.abs(today.getTime() - userDate.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		
		//Business logic entered here!!!!!!
		
		//   Mail conditions
		//1. One month has passed
		//2. User has not payed
		//3. User wishes to be informed by email?? If he don't want to be informed what happens?

		if ((diffDays>30)&&(previoususers[i].payed==="false")&&(previoususers[i].receive_email==="true")){
			console.log("User "+previoususers[i].first+" "+previoususers[i].last+" "+Math.floor(diffDays/30)+" month(s) passed");
			//send email to user
			this.send_email(previoususers[i].first,previoususers[i].last, previoususers[i].usremail);	
			//update date of registration payment
		}
	}
    console.log("current date: "+Date());
  };

  send_email(first,last,email){
  	
  	console.log("hey from send email");
  	console.log("first: "+first+" last: "+last+" email: "+email);
  	debugger;
  	var nodemailer = require('nodemailer');
 
	// create reusable transporter object using the default SMTP transport 
	var transporter = nodemailer.createTransport('smtps://myapos%40gmail.com:LuobAXYap2kzAuQ@smtp.gmail.com');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '"Ferrum Gym"<touishtouish@hotmail.com>', // sender address 
	    to: email, // list of receivers 
	    subject: 'Ferrum Gym. Please check your registration ✔', // Subject line 
	    text: 'Hello '+first+" "+last+".Please check your registration fee! ", // plaintext body 
	    html: '<b>Hello '+first+" "+last+"</b>.Please check you registration fee! " // html body 
	};
	debugger;
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response+" "+first+" "+last);
	});
  }; //end of send_email

  render() {
    return (
	    <div className="container">
          <div className="row">
	      	<div className="col-xs-12"> {this.props.children} </div>
	      </div>
	       <div className="row">
	      	<div className="col-xs-12"><MySignature/></div>
	       </div>
	    </div>
	  );
  }

}

App.propTypes = {
    children: PropTypes.element.isRequired
  };


  