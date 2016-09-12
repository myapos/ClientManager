import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ExportUsers extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  componentDidMount (){
  
  };

  parseJSONToCSVStr(jsonData) {
    //debugger;
    if(jsonData.length == 1) {
        return '';
    }

    let keys = Object.keys(jsonData[1]);

    let columnDelimiter = ',';
    let lineDelimiter = '\n';

    let csvColumnHeader = keys.join(columnDelimiter);
    let csvStr = csvColumnHeader + lineDelimiter;

    jsonData.forEach(item => {

        keys.forEach((key, index) => {
         
          if(item[key]!=undefined){
            if( (index > 0) && (index < keys.length) ) {
                csvStr += columnDelimiter;
            }
            csvStr += item[key];
          }
        });
         //debugger;
         /**/
        if(item.empty!="no user"){
          csvStr += lineDelimiter;
        }
        
    });

    return encodeURIComponent(csvStr);
  };

  exportToCsvFile(jsonData) {
    console.log("hey from exportToCsvFile function");
    //debugger;
    let i=0;
    let csvStr="";
    csvStr = this.parseJSONToCSVStr(jsonData);
    /*
    for(i=1;i<jsonData.length;i++){
      csvStr = csvStr+this.parseJSONToCSVStr(jsonData[i]);
    }*/
    //let csvStr = this.parseJSONToCSVStr(jsonData);
    let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
    
    let exportFileDefaultName = 'data.csv';
    
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  exportHandler(users){
   // debugger;
    console.log("hey from export function");
    //let cvStr = this.parseJSONToCSVStr.bind(users);
    this.exportToCsvFile(users);
    console.log("Exported to data.csv file");
    //call reducer
    //debugger;
    this.props.exportusers(users);
  };

  render() {

  const {users} = this.props;
  let newUsers = new Array();
  //debugger;
 
  let previoususers = JSON.parse(localStorage.getItem("users"));
  //console.log(previoususers);

  if((users.length==1)&&(previoususers.length==1)){
    console.log("No new users and no previous users exist");
    //retrieve previous users to newState
    previoususers = JSON.parse(localStorage.getItem("users"));
    newUsers = previoususers;
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
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-8"> <h1>Καλωσήρθατε στην σελίδα εξαγωγής δεδομένων </h1> </div>
          </div>
          <div className="row">
            <div className="col-xs-8"> <button className="btn btn-default" onClick={this.exportHandler.bind(this,newUsers)}>Export</button> </div>
          </div>
          <div className="row">
            <div className="col-xs-8">  <Link to="/main">Πίσω στον πίνακα ελέγχου</Link></div>
          </div>  
         
        </div>
    );
  }
}

export default ExportUsers;
