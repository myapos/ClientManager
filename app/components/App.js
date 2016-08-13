import React, { Component, PropTypes } from 'react';

export default class App extends Component {

componentDidUpdate(){
	debugger;
	this.mycheck();
};


mycheck(){
    debugger;
    
    console.log("hey from check");
    //get users from local storage and check
    let previoususers = JSON.parse(localStorage.getItem("users"));
    //get current date and date from previous users
    let today = new Date();
    let userDate;
	//let userDate = new Date(previoususers[2].date);


	//var timeDiff = Math.abs(today.getTime() - userDate.getTime());
	//var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	//alert(diffDays);
	//get how many users exist in the system
	let numOfUsers = previoususers.length;
	let userDates = new Array();
	let diffUserDates = new Array();

	for (let i=0;i<numOfUsers;i++){
		userDate = new Date(previoususers[i].date); 
		var timeDiff = Math.abs(today.getTime() - userDate.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		//alert(diffDays);
		//check if one month passed

		if (diffDays>30){
			console.log("User "+previoususers[i].first+" "+previoususers[i].last+" "+Math.floor(diffDays/30)+" month(s) passed");
			//send email to user
			this.send_email(previoususers[i].first,previoususers[i].last, previoususers[i].usremail);	
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
	    subject: 'Please check registration ✔', // Subject line 
	    text: 'Hello '+first+" "+last+".Please check you registration fee! ", // plaintext body 
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

		
  	//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
  	//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
  }; //end of send_email

  render() {
    return (
	    <div>
	      {this.props.children}
	    </div>
	  );
  }

}

App.propTypes = {
    children: PropTypes.element.isRequired
  };


  