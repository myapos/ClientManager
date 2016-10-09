import React, { Component, PropTypes } from 'react';
import MySignature from './Signature';
import logger from 'electron-logger';
import loggerAbout from 'electron-logger';
import fs from 'fs';

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

//const checkPeriodInMilliSeconds = 10080000; 	//check every week to send emails.
const checkPeriodInMilliSeconds = 5000;   		// checkPeriodInMinutes stands for the period in ms that has to be passed between
										    	// mail sendings 10080000

//debugger;
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


};


mycheck(){
    //debugger;
    
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
	let gonnaEnd = new Array();
	let usersGonnaEnd={};
	debugger;
	for (let i=0;i<numOfUsers;i++){
		userDate = new Date(previoususers[i].date); 
		var timeDiff = Math.abs(today.getTime() - userDate.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		var daysOffset = 5;
		//debugger;
		//First collect every user that is about to end

		//edw prepei to previoususers[i].payed na antikatasta8ei me tin plirwmi ka8e mina
		
		if (((diffDays+daysOffset)>30)&&(previoususers[i].payed=="Όχι")&&(previoususers[i].receive_email=="Ναι")){
			gonnaEnd.push("Όνομα: "+previoususers[i].first + " Επίθετο: "+previoususers[i].last+" email: "+previoususers[i].usremail);
			let userGonnaEnd = {
				"Όνομα": previoususers[i].first,
				"Επίθετο": previoususers[i].last,
				"email": previoususers[i].usremail
			};
			usersGonnaEnd[i] = userGonnaEnd;

		}

		//Business logic entered here!!!!!!
		
		//   Mail conditions
		//1. One month has passed
		//2. User has not payed
		//3. User wishes to be informed by email?? If he don't want to be informed what happens?

		if ((diffDays>30)&&(previoususers[i].payed=="Όχι")&&(previoususers[i].receive_email=="Ναι")){
			console.log("User "+previoususers[i].first+" "+previoususers[i].last+" "+Math.floor(diffDays/30)+" month(s) passed");
			//send email to user
			this.send_email(previoususers[i].first,previoususers[i].last, previoususers[i].usremail);	
			//update date of registration payment
		}
	}
	debugger;
	//save gonnaEnd in localStorage
	localStorage.setItem("gonnaEnd", gonnaEnd);
	localStorage.setItem("usersGonnaEnd", JSON.stringify(usersGonnaEnd));
	//Write to log file about2end.txt the users that are about to end
	this.save_to_log_about2end_file(gonnaEnd,'./about2end.log');

	//Then send a notification to ferrum gym for the users that are about to end
	//send log file save_to_log_abou2end_file to Ferrum Gym as email
	if(this.send_about2_end_email()){
		gonnaEnd.length = 0; //empty gonnaEnd array
	}


    console.log("current date: "+Date());
  };

emptyAbout2End(fileAbout2End){
	  console.log("hey from emptyAbout2End");	

	  fs.exists(fileAbout2End, function(exists) {
	  if (exists) {
	  	fs.writeFileSync(fileAbout2End, '')};
  	  });
  
}

  //sends about2end.log file to Ferrum Gym
send_about2_end_email(){
  	//debugger;
  	console.log("hey from send_about2_end_email email");
  	//console.log("first: "+first+" last: "+last+" email: "+email);
  	//debugger;
  	var nodemailer = require('nodemailer');
 
	// create reusable transporter object using the default SMTP transport  ferrumgymbox@gmail.com HHA9jX7Rx#keUa
	var transporter = nodemailer.createTransport('smtps://ferrumgymbox@gmail.com:HHA9jX7RxkeUa@smtp.gmail.com');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '"Ferrum Gym"<ferrumgymbox@gmail.com>', // sender address 
	    to: 'ferrumgymbox@gmail.com', // Notify Ferrum Gym
	    subject: 'Ferrum Gym. Χρήστες στους οποίους λήγει η συνδρομή ✔', // Subject line 
	    text: 'Στα συνημμένα οι χρήστες για τους οποίους λήγει η συνδρομή ', // plaintext body 
	    html: 'Στα συνημμένα οι χρήστες για τους οποίους λήγει η συνδρομή ', // html body 
		attachments: {path: './about2end.log'} // filename and content type is derived from path
		
	};
	// debugger;
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, (error, info)=>{
	    if(error){
	        return console.log(error);
	    }
	    else{

		    let msg = 'Message sent: ' + info.response+" "+" Ferrum Gym was notified" ;
		    console.log(msg);
		    //empty file
		    this.emptyAbout2End("./about2end.log");	
		}

	});

	return true;
  }; //end of send_email


send_email(first,last,email){
  	//debugger;
  	console.log("hey from send email");
  	console.log("first: "+first+" last: "+last+" email: "+email);
  	//debugger;
  	var nodemailer = require('nodemailer');
 
	// create reusable transporter object using the default SMTP transport  ferrumgymbox@gmail.com HHA9jX7Rx#keUa
	var transporter = nodemailer.createTransport('smtps://ferrumgymbox@gmail.com:HHA9jX7RxkeUa@smtp.gmail.com');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '"Ferrum Gym"<ferrumgymbox@gmail.com>', // sender address 
	    to: email, // list of receivers 
	    subject: 'Ferrum Gym. Παρακαλώ ελέγξτε τη συνδρομή σας ✔', // Subject line 
	    text: 'Γειά σας '+first+" "+last+".Παρακαλώ ελέγξτε τη συνδρομή σας! ", // plaintext body 
	    html: '<b>Γειά σας '+first+" "+last+"</b>.Παρακαλώ ελέγξτε τη συνδρομή σας! " // html body 
	};
	//debugger;
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, (error, info)=>{
	    if(error){
	        return console.log(error);
	    }
	    else{
		    let msg = 'Message sent: ' + info.response+" "+"For user with credentials username: "+first+" lastname: "+last +"." ;
		    console.log(msg);
		    //debugger;
		    //save to log file
		    this.save_to_log_file(msg);
		    this.emptyAbout2End("./about2end.log");	
		}
	    
	});
  }; //end of send_email


  save_to_log_about2end_file(arr,path2File){

  	console.log("users to end: ",arr.toString());
  	let users2End = arr.toString();
  	let msg=Date()+"\n";
  	msg = msg + "Χρήστες που θα λήξουν οι συνδρομές τους σε διάστημα 5 ημερών\n";

  	for (let i=0;i<arr.length;i++){
  		console.log("user ",i," ",arr[i]);
  		msg = msg + (i+1) +" - " + arr[i]+"\n";
  	}

  	fs.exists(path2File, function(exists) {
	  if (exists) {
	  	fs.writeFileSync(path2File, msg)};
  	  });
	
	console.log("Wrote to about2end file succesfully");

  };

  save_to_log_file(msg){
	//reference https://www.npmjs.com/package/electron-logger
	//output format: 
	//{{timestamp}} [{{filename}}:{{lineNumber}}]>> {{log_content}} 
	//16:46:55:111 [test.js:4]>>a info message 
	logger.info("Send Info: " + msg);


	logger.setLevel("info");
	logger.setLevel(1);

	logger.getLevel();//"info" 

	logger.close();
	logger.pause();
	logger.open();

	logger.setOutput({file:"./tmp.log"});
	console.log("Wrote to log file succesfully");

  };


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


  