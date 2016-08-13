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
    console.log("hey addrowhandler");
    var table = document.getElementById("output_table");
    var rows = table.getElementsByClassName("res");
    for(let i = 0; i <= rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function (row) {
            return function () {
                var cell = row.getElementsByTagName("td")[0];
                var user;
                //var id = cell.innerHTML;
                //alert("id:" + id);
                console.log(that);
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
                          receive_email:row.getElementsByTagName("td")[20].innerHTML           
                      }
                      debugger;
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
  console.log("hey from displayUsersFromLocalStorage");
  //debugger;
  //get values from fields
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let output = document.getElementById("output");
  let htmltableheadings ="<div class=\"table-responsive\">\
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
                  Receive email? \
                  </th>\
              </tr>\
              </thead><tbody>";
            output.innerHTML = htmltableheadings;
  
  //debugger;
  
  console.log("Got values succesfully");
  let output_table = document.getElementById("output_table");
  if(localStorage.length==0){
        console.log("No users in database yet");
        output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">No users in database yet. Please add some first!</td></tr</tbody></table></div>";
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
          </tr>";
    }
  //debugger;
  /*
  if(searchcount==0){
    output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">No users in database yet</td></tr></table>";
  } */
  })
      
    if(searchcount==0){
      output_table.innerHTML = output_table.innerHTML+"<tr><td colSpan=\"17\">This user does not exist in database</td></tr></tbody></table></div>";
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
  const {users,deleteuser} = this.props;
  //debugger;
    return (
        <div>
          <DeleteForm ref="FormInput" > 
          </DeleteForm>
          <br/>  
          If you want to delete a user please search for him by his first name and last name and
          click on it. User Info: <br/>
                <button onClick={this.Search.bind(this,this.props)}>
                  Search
                </button>  
              <div id= "output"> </div>
          <Link to="/main">Back to control panel</Link>
        </div>
    );
  }
}

export default DeleteUser;
