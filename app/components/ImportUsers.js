import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ImportUsers extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  componentDidMount (){
  
  };
  
  handleFileSelect(users,evt) {
    debugger;
    console.log("hey from handleFileSelect function");
    if (window.FileReader) {
          // FileReader are supported.
          let files = evt.target.files;
          this.getAsText(files[0],users);
      } else {
          alert('FileReader are not supported in this browser.');
      }

  };

  getAsText(fileToRead,users) {
      debugger;
      let reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      //var that = this;
      reader.onload = function(event) {
          // The file's text will be printed here
          //console.log(event.target.result);
          let csv = event.target.result;

          var allTextLines = csv.split(/\r\n|\n/);
            var lines = [];
            for (var i=0; i<allTextLines.length; i++) {
                var data = allTextLines[i].split(';');
                    var tarr = [];
                    for (var j=0; j<data.length; j++) {
                        tarr.push(data[j]);
                    }
                    lines.push(tarr);
            }
          console.log(lines);
          debugger;
        //save to local storage lines items
        //use import reducer
        this.props.importusers(lines);
        }.bind(this);//this.loadHandler;
      reader.onerror = this.errorHandler;
      
      //lines 
    };

   loadHandler(event) {
      debugger;

      let csv = event.target.result;

      var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
      console.log(lines);
     
      //save to local storage lines items
      //use import reducer
      //users.importusers(lines);
    };

  errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    };

  importHandler(users,evt){
    //var data = document.getElementById("myfile").value;
    debugger;
    console.log("hey from import function");
    document.getElementById('myfile').addEventListener('change', this.handleFileSelect(users,evt), false);
  };

  render() {
  const {users} = this.props;
  let newUsers = new Array();
  debugger;
 
  let previoususers = JSON.parse(localStorage.getItem("users"));
  //console.log(previoususers);

  if((users.length==1)&&(previoususers==null)){
    console.log("No new users and no previous users exist");
    //retrieve previous users to newState
    previoususers = JSON.parse(localStorage.getItem("users"));
    newUsers = {users};
  }
  else if((users.length==1)&&(previoususers.length>1)){
    console.log("No new users empty but previous users exist");
    //retrieve previous users to newState
    previoususers = JSON.parse(localStorage.getItem("users"));
    newUsers = previoususers;
  }
  else if((users.length>1)&&(previoususers.length>1)){
    console.log("New users exist and previous users exist");
    //retrieve previous users to newState
    previoususers = JSON.parse(localStorage.getItem("users"));
    newUsers=users;
  }
  
  //debugger;
    return (
        <div>
        <h1>Welcome to import page </h1>
         <button >Import</button><br/>
         <input id='myfile' type="file" name="file" accept=".csv" onChange={this.handleFileSelect.bind(this,newUsers)}/><br/>
         <span>foo</span><br/>
        <Link to="/main">Back to control panel</Link>
        </div>
    );
  }
}

export default ImportUsers;
