import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DeleteForm from './DeleteForm';



class DeleteUser extends Component {

  static propTypes = {
    deleteuser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount (){
            () => this.refs.FormInput.getDOMNode().focus(); 
  };

 addRowHandlers (that){
    //console.log("hey addrowhandler");
    var table = document.getElementById("output_table");
    var rows = table.getElementsByClassName("res");
    for(let i = 1; i <= rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function (row) {
            return function () {
                var cell = row.getElementsByTagName("td")[0];
                var user;
                //var id = cell.innerHTML;
                //alert("id:" + id);
                //console.log(that);
                //delete selected user from table
                  user = {
                          first: row.getElementsByTagName("td")[1].innerHTML,
                          last:row.getElementsByTagName("td")[2].innerHTML,
                          usremail:row.getElementsByTagName("td")[3].innerHTML,
                          mob:row.getElementsByTagName("td")[4].innerHTML,
                          date:row.getElementsByTagName("td")[5].innerHTML,
                          age:row.getElementsByTagName("td")[6].innerHTML,
                          sex:row.getElementsByTagName("td")[7].innerHTML,
                          kettl:row.getElementsByTagName("td")[8].innerHTML,
                          MIB:row.getElementsByTagName("td")[9].innerHTML,
                          KVMG:row.getElementsByTagName("td")[10].innerHTML,
                          CV:row.getElementsByTagName("td")[11].innerHTML,
                          KA:row.getElementsByTagName("td")[12].innerHTML,
                          KB:row.getElementsByTagName("td")[13].innerHTML,
                          CF:row.getElementsByTagName("td")[14].innerHTML,
                          TRX_:row.getElementsByTagName("td")[15].innerHTML,
                          WC:row.getElementsByTagName("td")[16].innerHTML,
                          ADG:row.getElementsByTagName("td")[17].innerHTML,
                          id:row.getElementsByTagName("td")[18].innerHTML,
                          sms:row.getElementsByTagName("td")[19].innerHTML,
                          receive_email:row.getElementsByTagName("td")[20].innerHTML,
                          payed:row.getElementsByTagName("td")[21].innerHTML,
                          date_payment:row.getElementsByTagName("td")[22].innerHTML            
                      }
                      //debugger;
                      var r = confirm("Are you sure to delete user "+user.first +" "+user.last+"?");
                      if (r == true) {
                        
                          that.deleteuser(that.users,user.id);
                          alert("User deleted!");
                      } else {
                          ;
                      }
                      
            };
        };

        currentRow.onclick = createClickHandler(currentRow);
    }
};

Search(usrprops){
  var user;
  var searchcount=0;
  //console.log("hey from displayUsersFromLocalStorage");
  //debugger;
  //get values from fields
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let output = document.getElementById("output");
  let htmltableheadings ="<div class=\"users_table\">\
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
                  Ηλικία\
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Φύλλο\
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
                  SMS \
                  </th>\
                  <th class=\"doNotDisplay\">\
                  Λήψη e-mail? \
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
              </tr>\
              </thead><tbody>";
            output.innerHTML = htmltableheadings;
  
  //debugger;
  
  //console.log("Got values succesfully");
  let output_table = document.getElementById("output_table");
  if(localStorage.length==0){
        //console.log("No users in database yet");
        output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">Δεν υπάρχουν πελάτες αυτή τη στιγμή. Παρακαλώ προσθέστε μερικούς πρώτα.</td></tr</tbody></table></div>";
      }
  else {
  let users = JSON.parse(localStorage.getItem("users"));
  //console.log(users);
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
        //console.log("class:" + classesArr + " idc:" + idc);
        classes += classesArr + ",";
      });

      //console.log("classes before: "+classes);
      
      if(classes.substr(classes.length-1)==","){
        //console.log("comma L:::"+classes.length+" last char: "+classes.substr(classes.length-1));
        classes = classes.substr(0, classes.length-1);
      }

    if((user.first==fname)&&(user.last==lname)){
      //console.log("found user");
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
          </tr>";
    }
  //debugger;
  /*
  if(searchcount==0){
    output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">No users in database yet</td></tr></table>";
  } */
  })
      
    if(searchcount==0){
      output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"23\">Αυτός ο πελάτης δεν υπάρχει στο πελατολόγιο.</td></tr></tbody></table></div>";
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
    //console.log("hey from check:"+count);
    //console.log("hey from check");
  }

  render() {
  const {users,deleteuser} = this.props;
  //debugger;
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12"> <DeleteForm ref="FormInput"> <button className="btn btn-default" onClick={this.Search.bind(this,this.props)}>Αναζήτηση</button> </DeleteForm> </div>
          </div>
          <div className="row">
            <div className="col-xs-12"> Εάν επιθυμείτε να διαγράψετε κάποιο πελάτη παρακαλώ χρησιμοποιήστε την αναζήτηση 
            βάσει ονόματος και επωνύμου και κάντε κλικ πάνω του.</div>
          </div>
          <div className="row">  
              <div className="col-xs-12">Πληροφορίες πελάτη:<div id= "output"></div></div>
          </div>
        </div>
    );
  }
}

export default DeleteUser;
