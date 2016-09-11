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
    debugger;
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
            //open modal window and get updated data
            myDivElement = <MyModal users={that.users} userRow={user} userUpdate={that.updateuser}/>
            ReactDOM.render(myDivElement, document.getElementById("edit"+user.id));  
    }
};

Search(usrprops){
  var user;
  var searchcount=0;
  console.log("hey from displayUsersFromLocalStorage");
  //debugger;
  //get values from fields
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let output = document.getElementById("output");
  let htmltableheadings ="<div id=\"users_table_update\">\
            <table id=\"output_table\" class=\"table table-bordered table-hover\">\
               <thead>\
               <tr>\
                  <th>\
                  Num\
                  </th>\
                  <th>\
                  First name\
                  </th>\
                  <th>\
                  Last name\
                  </th>\
                  <th>\
                   email\
                  </th>\
                  <th>\
                   mobile\
                  </th>\
                  <th>\
                   date\
                  </th>\
                  <th>\
                   age\
                  </th>\
                  <th>\
                   Gender\
                  </th>\
                  <th>\
                   Kettlebels\
                 </th>\
                  <th>\
                   Made in brazil\
                 </th>\
                  <th>\
                   Kravmaga\
                  </th>\
                  <th>\
                   Civilian\
                  </th>\
                  <th>\
                  Kids A\
                  </th>\
                  <th>\
                   Kids B \
                  </th>\
                  <th>\
                  Crossfit \
                  </th>\
                  <th>\
                  TRX  \
                  </th>\
                  <th>\
                  Womens Corner\
                  </th>\
                  <th>\
                  Adaptive_gym \
                  </th>\
                  <th>\
                  id \
                  </th>\
                  <th>\
                  sms \
                  </th>\
                  <th>\
                  receive_email\
                  </th>\
                  <th>\
                  Payed?\
                  </th>\
                  <th>\
                  Payment date\
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
        output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"22\">Δεν υπάρχουν πελάτες αυτή τη στιγμή. Παρακαλώ προσθέστε μερικούς πρώτα.</td></tr</tbody></table></div>";
      }
  else {
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  //search for the values user gave
  users.map((user,num) => {
    if((user.first==fname)&&(user.last==lname)){
      console.log("found user");
      //debugger; 
      searchcount++;
           
      output_table.innerHTML = output_table.innerHTML+"<tr class="+"res"+">\
          <td>"+num+"</td>\
          <td>"+user.first+"</td>\
          <td>"+user.last+"</td>\
          <td>"+user.usremail+"</td>\
          <td>"+user.mob+"</td>\
          <td>"+user.date+"</td>\
          <td>"+user.age+"</td>\
          <td>"+user.sex+"</td>\
          <td>"+user.kettl+"</td>\
          <td>"+user.MIB+"</td>\
          <td>"+user.KVMG+"</td>\
          <td>"+user.CV+"</td>\
          <td>"+user.KA+"</td>\
          <td>"+user.KB+"</td>\
          <td>"+user.CF+"</td>\
          <td>"+user.TRX_+"</td>\
          <td>"+user.WC+"</td>\
          <td>"+user.ADG+"</td>\
          <td>"+user.id+"</td>\
          <td>"+user.sms+"</td>\
          <td>"+user.receive_email+"</td>\
          <td>"+user.payed+"</td>\
          <td>"+user.date_payment+"</td>\
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
      output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"24\">This user does not exist in database</td></tr></tbody></table></div>";
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
            <div className="col-xs-8"> <UpdateForm ref="FormInput" ><button onClick={this.Search.bind(this,this.props)} className="btn btn-default">Αναζήτηση</button> </UpdateForm> </div>
          </div>
          <div className="row">
            <div className="col-xs-8">Εάν επιθυμείτε να επεξεργαστείτε κάποιο πελάτη παρακαλώ χρησιμοποιήστε την αναζήτηση 
            βάσει ονόματος και επωνύμου και πατήστε το κουμπί "Επεξεργασία".</div>
          </div>
          <div className="row">  
              <div className="col-xs-8">Στοιχεία πελάτη:<div id= "output"> </div></div>
          </div>
          <div className="row">            
            <div className="col-xs-4"> <Link to="/main">Πίσω στον πίνακα ελέγχου</Link></div>
          </div>
        </div>
    );
  }
}

export default UpdateUser;
