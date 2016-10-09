import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
var rand = require('unique-random')(1, 10000);
import MyModal from './MyModal';
/*import GetAllUsersList from '../containers/get-all-users';
import AddUser from '../containers/add-user';*/


class DisplayUnpaidUsers extends Component {
 
static propTypes = {
    updateunpaiduser: PropTypes.func.isRequired,
    //users: PropTypes.array.isRequired
  };

displayUsersFromLocalStorage(that, newusersGonnaEnd) {
  debugger;
  console.log("hey from displayUnpaidUsers:" +newusersGonnaEnd);

  console.log("Users from local storage:"+localStorage.getItem("users")); 

  if(localStorage.length<=1){

    return(<tr><td colSpan="22">Δεν υπάρχουν πελάτες</td></tr>)
  }
  else{
  
  //get users from local storage and search to find info data for newusersGonnaEnd
  //return a new users full info object which corresponds to newusersGonnaEnd object

  let users = JSON.parse(localStorage.getItem("users"));
  let newInfoUnpaidUsers = [];

  for(let j in newusersGonnaEnd){
    for(let m in users){
       //debugger;
      if((users[m].first==newusersGonnaEnd[j]["Όνομα"])
          &&(users[m].last==newusersGonnaEnd[j]["Επίθετο"]))
        {
          newInfoUnpaidUsers.push(users[m]);
          console.log("fffff");
         
      }

    }
  }
  //debugger;

  /*id is giving us index of array in map function --> 
  see http://stackoverflow.com/questions/20003676/how-to-get-current-index-in-array-prototype-map
  and is used as a key in li element*/

   
    return (newInfoUnpaidUsers.map((user,id) => {
      debugger;
      if (user.first)
      console.log("id:"+id);
      console.log(user);
      let classes = "";
      let classesArr = [];
      let dummy_var=0;
      
      (user.kettl=="Ναι") ? (classesArr.push("Kettlebels")): (dummy_var=1);
      (user.MIB=="Ναι") ? (classesArr.push("Made In Brazil")) : (dummy_var=1);
      (user.KVMGSTAW=="Ναι") ? (classesArr.push("Krav Maga Stay Away")) : (dummy_var=1);
      (user.KVMGCV=="Ναι") ? (classesArr.push("Krav Maga Civillian")) :(dummy_var=1);
      (user.KA=="Ναι") ? (classesArr.push("Krav Maga Kiddy")) : (dummy_var=1);
      (user.KB=="Ναι") ? (classesArr.push("Krav Maga Kids")) : (dummy_var=1);
      (user.CF=="Ναι") ? (classesArr.push("Crossfit")) : (dummy_var=1);
      (user.TRX_=="Ναι") ? (classesArr.push("TRX")) : (dummy_var=1);
      (user.WC=="Ναι") ? (classesArr.push("Women's corner")) : (dummy_var=1);
      (user.ADG=="Ναι") ? (classesArr.push("Adaptive gym")) : (dummy_var=1);
      (user.Judo=="Ναι") ? (classesArr.push("Judo")) : (dummy_var=1);
      ((typeof(user.testkettlClass)!="undefined")&&(user.testkettlClass.Register=="Ναι")) ? (classesArr.push("testkettlClass")) : (dummy_var=1);

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

      var myDivElement;

      if((!user.empty)&&(user.first!="first"))
        {
        
        //myDivElement = <MyModal users={user} userRow={user} userUpdate={user}/>;
        //des giati den iparxei to user.testkettlclass ekei kollaei kai den dimiourgei to modal window
        //
        debugger;
        return(
        <tr key={rand()}>
          <td className="doNotDisplay">
          {id} 
          </td>
          <td>
          {user.first}
          </td>
          <td>
          {user.last}
          </td>
          <td>
           {user.usremail}
          </td>
          <td>
           {user.mob}
          </td>
          <td>
           {user.date}
          </td>
          <td className="doNotDisplay">
           {user.age}
          </td>
          <td className="doNotDisplay">
           {user.sex}
          </td>
          <td className="doNotDisplay">
           {user.kettl}
         </td>
          <td className="doNotDisplay">
           {user.MIB}
         </td>
          <td className="doNotDisplay">
           {user.KVMGSTAW}
          </td>
          <td className="doNotDisplay">
           {user.KVMGCV} 
          </td>
          <td className="doNotDisplay">
          {user.KA}
          </td>
          <td className="doNotDisplay">
           {user.KB} 
          </td>
          <td className="doNotDisplay">
           {user.Judo} 
          </td>
          <td className="doNotDisplay">
          {user.CF}
          </td>
          <td className="doNotDisplay">
          {user.TRX_} 
          </td>
          <td className="doNotDisplay">
          {user.WC}
          </td>
          <td className="doNotDisplay">
          {user.ADG}
          </td>
          <td className="doNotDisplay">
          {user.sms}
          </td>
          <td className="doNotDisplay">
          {user.receive_email}
          </td>
          <td>
          {user.payed}
          </td>
          <td>
          {user.payment_date}
          </td>
          <td>
          {classes}
          </td>
          <td id={"edit"+user.id}> <MyModal users={newInfoUnpaidUsers} userRow={user} userUpdate={that.updateunpaiduser}/>
          </td>
        </tr>)
        
      }//end of if
      else 
        return(""); 
       
    }))
  }
}
 render() {
  //const {users,updateuser} = this.props;
  
  debugger;

  const {updateunpaiduser} = this.props;
  //const {users} = this.props;
  //let gonnaEnd = localStorage.getItem("gonnaEnd").split(",");
  let usersGonnaEnd = JSON.parse(localStorage.getItem("usersGonnaEnd"));
  let usert;
  let newusersGonnaEnd = {};
  //console.log("mpainw edw");

  for (var i in usersGonnaEnd){

    usert = usersGonnaEnd[i];
    console.log("Όνομα:"+usert["Όνομα"]+" Επίθετο:"+usert["Επίθετο"]+" email:"+usert["email"]);
    //scan for the dummy line and ignore it
    if((usert["Όνομα"]!="first")&&((usert["Επίθετο"]!="last")))
      newusersGonnaEnd[i] = usert ;
      //debugger;
  }

  debugger;
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-11"> <legend> Απλήρωτες συνδρομές</legend></div>
          <div className="col-xs-1 positionMainLink"> <Link to="/main">Πίσω</Link></div>
        </div>
        <div className="row">
          <div className="col-xs-4"> Λίστα πελατών:
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="users_table table-responsive">
             <table className="table table-bordered">
                 <thead>
                   <tr key={rand()}>
                        <th className="doNotDisplay">\
                        Num
                        </th>
                        <th>
                        Όνομα
                        </th>
                        <th>
                        Επώνυμο
                        </th>
                        <th>
                        Email
                        </th>
                        <th>
                        Κινητό
                        </th>
                        <th>
                        Ημερομηνία
                        </th>
                        <th className="doNotDisplay">
                        Ηλικία
                        </th>
                        <th className="doNotDisplay">
                        Φύλλο
                        </th>
                        <th className="doNotDisplay">
                        Kettlebels
                        </th>
                        <th className="doNotDisplay">
                        Made in brazil
                        </th>
                        <th className="doNotDisplay">
                        Kravmaga Stay Away
                        </th>
                        <th className="doNotDisplay">
                        Kravmaga Civilian
                        </th>
                        <th className="doNotDisplay">
                        Kravmaga Kiddy
                        </th>
                        <th className="doNotDisplay">
                        Kravmaga Kids
                        </th>
                        <th className="doNotDisplay">
                        Judo
                        </th>
                        <th className="doNotDisplay">
                        Crossfit 
                        </th>
                        <th className="doNotDisplay">
                        TRX  
                        </th>
                        <th className="doNotDisplay">
                        Womens Corner
                        </th>
                        <th className="doNotDisplay">
                        Adaptive_gym 
                        </th>
                        <th className="doNotDisplay">
                        id 
                        </th>
                        <th className="doNotDisplay">
                        SMS 
                        </th>
                        <th className="doNotDisplay">
                        Λήψη e-mail?
                        </th>
                        <th>
                        Πληρωμή? 
                        </th>
                        <th>
                        Ημερομηνία πληρωμής
                        </th>
                        <th>
                        Τμήματα
                        </th>
                        <th>
                        Επεξεργασία
                        </th>
                  </tr>
                </thead>
                <tbody >
                  {this.displayUsersFromLocalStorage(this.props,newusersGonnaEnd)}
                </tbody>
              </table>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default DisplayUnpaidUsers;