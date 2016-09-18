import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import UpdateForm from './UpdateForm';
import MyModal from './MyModal';


class UpdateUser extends Component {

  static propTypes = {
    updateuser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount (){
            () => this.refs.FormInput.getDOMNode().focus(); 
  };

 addRowHandlers (that){
    console.log("hey addrowhandler");
    var table = document.getElementById("output_table");
    var rows = table.getElementsByClassName("res");
    var currentRow,user,myDivElement;
    //debugger;
    for(let i = 1; i <= rows.length; i++) {
        currentRow = table.rows[i];
        user = {
                first: currentRow.getElementsByTagName("td")[1].innerHTML,
                last:currentRow.getElementsByTagName("td")[2].innerHTML,
                usremail:currentRow.getElementsByTagName("td")[3].innerHTML,
                mob:currentRow.getElementsByTagName("td")[4].innerHTML,
                date:currentRow.getElementsByTagName("td")[5].innerHTML,
                age:currentRow.getElementsByTagName("td")[6].innerHTML,
                sex:currentRow.getElementsByTagName("td")[7].innerHTML,
                kettl:currentRow.getElementsByTagName("td")[8].innerHTML+"",
                MIB:currentRow.getElementsByTagName("td")[9].innerHTML+"",
                KVMG:currentRow.getElementsByTagName("td")[10].innerHTML+"",
                CV:currentRow.getElementsByTagName("td")[11].innerHTML+"",
                KA:currentRow.getElementsByTagName("td")[12].innerHTML+"",
                KB:currentRow.getElementsByTagName("td")[13].innerHTML+"",
                CF:currentRow.getElementsByTagName("td")[14].innerHTML+"",
                TRX_:currentRow.getElementsByTagName("td")[15].innerHTML+"",
                WC:currentRow.getElementsByTagName("td")[16].innerHTML+"",
                ADG:currentRow.getElementsByTagName("td")[17].innerHTML+"",
                id:currentRow.getElementsByTagName("td")[18].innerHTML+"",
                sms:currentRow.getElementsByTagName("td")[19].innerHTML+"", 
                receive_email:currentRow.getElementsByTagName("td")[20].innerHTML+"" ,
                payed:currentRow.getElementsByTagName("td")[21].innerHTML+"",
                date_payment:currentRow.getElementsByTagName("td")[22].innerHTML+""           
              }
            //open modal window and get updated data. From here we create button update
            myDivElement = <MyModal users={that.users} userRow={user} userUpdate={that.updateuser}/>
            ReactDOM.render(myDivElement, document.getElementById("edit"+user.id));  
    }
};

Search(usrprops){

  console.log("output of Document-readyState"+Document.readyState);

  if (typeof(Document.readyState==="undefined")){
    console.log("document is not ready");
    setTimeout(function(){ console.log("waiting for document to get ready"); }, 500);
  }
  //debugger;

  //while(typeof(Document.readyState==="undefined")){
    setTimeout(function(){ console.log("waiting for document to get ready"); }, 50);
  //}
  var user;
  var searchcount=0;
  console.log("hey from displayUsersFromLocalStorage");
  //debugger;
  //get values from fields
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let output = document.getElementById("output");
  let htmltableheadings ="<div id=\"users_table_update\" class=\"table-responsive\">\
            <table id=\"output_table\" class=\"table table-bordered\">\
               <thead>\
               <tr>\
                  <th class=\"doNotDisplay\">\
                  Num\
                  </th>\
                  <th>\
                  Όνομα\
                  </th>\
                  <th>\
                  Επώνυμο\
                  </th>\
                  <th>\
                  Email\
                  </th>\
                  <th>\
                  Κινητό\
                  </th>\
                  <th>\
                  Ημερομηνία\
                  </th>\
                  <th class=\"doNotDisplay\">\
                   age\
                  </th>\
                  <th class=\"doNotDisplay\">\
                   Gender\
                  </th>\
                  <th class=\"doNotDisplay\">\
                   Kettlebels\
                 </th>\
                  <th class=\"doNotDisplay\">\
                   Made in brazil\
                 </th>\
                  <th class=\"doNotDisplay\">\
                   Kravmaga\
                  </th>\
                  <th class=\"doNotDisplay\">\
                   Civilian\
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Kids A\
                  </th>\
                  <th class=\"doNotDisplay\">\
                   Kids B \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Crossfit \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  TRX  \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Womens Corner\
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Adaptive_gym \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  id \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  sms \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  receive_email\
                  </th>\
                  <th>\
                  Πληρωμή? \
                  </th>\
                  <th>\
                  Ημερομηνία πληρωμής\
                  </th>\
                  <th>\
                  Τμήματα\
                  </th>\
                  <th>\
                  Επεξεργασία \
                  </th>\
              </tr>\
              </thead><tbody>";
            output.innerHTML = htmltableheadings;
  
  //debugger;
  
  console.log("Got values succesfully");
  let output_table = document.getElementById("output_table");
  if(localStorage.length==0){
        console.log("No users in database yet");
        output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"22\">Δεν υπάρχουν πελάτες αυτή τη στιγμή. Παρακαλώ προσθέστε μερικούς πρώτα!</td></tr</tbody></table></div>";
      }
  else {
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  //search for the values user gave
  users.map((user,num) => {
      let classes = "";
      let classesArr = [];
      let dummy_var=0;
      
      (user.kettl=="true") ? (classesArr.push("Kettlebels")): (dummy_var=1);
      (user.MIB=="true") ? (classesArr.push("Made In Brazil")) : (dummy_var=1);
      (user.KVMG=="true") ? (classesArr.push("Krav Maga Stay Away")) : (dummy_var=1);
      (user.CV=="true") ? (classesArr.push("Civillian")) :(dummy_var=1);
      (user.KA=="true") ? (classesArr.push("Krav Maga Kiddy")) : (dummy_var=1);
      (user.KB=="true") ? (classesArr.push("Krav Maga Kids")) : (dummy_var=1);
      (user.CF=="true") ? (classesArr.push("Crossfit")) : (dummy_var=1);
      (user.TRX_=="true") ? (classesArr.push("TRX")) : (dummy_var=1);
      (user.WC=="true") ? (classesArr.push("Women's corner")) : (dummy_var=1);
      (user.ADG=="true") ? (classesArr.push("Adaptive gym")) : (dummy_var=1);
      
      //console.log("length:"+classesArr.length);

      classesArr.map( (classesArr, idc) => {
        console.log("class:" + classesArr + " idc:" + idc);
        classes += classesArr + ",";
      });

      //console.log("classes before: "+classes);
      
      if(classes.substr(classes.length-1)==","){
        console.log("comma L:::"+classes.length+" last char: "+classes.substr(classes.length-1));
        classes = classes.substr(0, classes.length-1);
      }
    if((user.first==fname)&&(user.last==lname)){
      console.log("found user");
      //debugger; 
      searchcount++;
           
      output_table.innerHTML = output_table.innerHTML+"<tr class="+"res"+">\
          <td class=\"doNotDisplay\">"+num+"</td>\
          <td>"+user.first+"</td>\
          <td>"+user.last+"</td>\
          <td>"+user.usremail+"</td>\
          <td>"+user.mob+"</td>\
          <td>"+user.date+"</td>\
          <td class=\"doNotDisplay\">"+user.age+"</td>\
          <td class=\"doNotDisplay\">"+user.sex+"</td>\
          <td class=\"doNotDisplay\">"+user.kettl+"</td>\
          <td class=\"doNotDisplay\">"+user.MIB+"</td>\
          <td class=\"doNotDisplay\">"+user.KVMG+"</td>\
          <td class=\"doNotDisplay\">"+user.CV+"</td>\
          <td class=\"doNotDisplay\">"+user.KA+"</td>\
          <td class=\"doNotDisplay\">"+user.KB+"</td>\
          <td class=\"doNotDisplay\">"+user.CF+"</td>\
          <td class=\"doNotDisplay\">"+user.TRX_+"</td>\
          <td class=\"doNotDisplay\">"+user.WC+"</td>\
          <td class=\"doNotDisplay\">"+user.ADG+"</td>\
          <td class=\"doNotDisplay\">"+user.id+"</td>\
          <td class=\"doNotDisplay\">"+user.sms+"</td>\
          <td class=\"doNotDisplay\">"+user.receive_email+"</td>\
          <td>"+user.payed+"</td>\
          <td>"+user.date_payment+"</td>\
          <td>"+classes+"</td>\
          <td id=\"edit"+user.id+"\"></td>\
          </tr>";
    }
  //debugger;
  /*
  if(searchcount==0){
    output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">No users in database yet</td></tr></table>";
  } */
  })
      
    if(searchcount==0){
      output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"24\">Αυτός ο πελάτης δεν υπάρχει στο πελατολόγιο.</td></tr></tbody></table></div>";
    }
  }
  
  output_table.innerHTML = output_table.innerHTML + "</tbody></table></div>";
  var test = usrprops;
  //debugger;
  this.addRowHandlers(usrprops);
  //remove object
  //debugger;
  } //end of deleteusers

  //alert(searchcount);
  check (count){
    //debugger;
    console.log("hey from check:"+count);
    //console.log("hey from check");
  }

  render() {
  const {users,updateuser} = this.props;
  //debugger;
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12"> <UpdateForm ref="FormInput" ><button type="button" onClick={this.Search.bind(this,this.props)} className="btn btn-default">Αναζήτηση</button> </UpdateForm> </div>
          </div>
          <div className="row">
            <div className="col-xs-12">Εάν επιθυμείτε να επεξεργαστείτε κάποιο πελάτη παρακαλώ χρησιμοποιήστε την αναζήτηση 
            βάσει ονόματος και επωνύμου και πατήστε το κουμπί "Επεξεργασία".</div>
          </div>
          <div className="row">  
              <div className="col-xs-11">Στοιχεία πελάτη:<div id= "output"> </div></div>
          </div>
        </div>
    );
  }
}

export default UpdateUser;
