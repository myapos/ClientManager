import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
/*import GetAllUsersList from '../containers/get-all-users';
import AddUser from '../containers/add-user';*/


class GetAllUsers extends Component {
  static propTypes = {
    getallusers: PropTypes.func.isRequired,
    users:PropTypes.array.isRequired
  };

//if we want to trigger an action we call myprops this.getallusers. This is not necessary 
//because the state of this is the users that are saved. displayUsersFromState only displays the 
//users which is equal to our state. no change to the state happens here!!!!!!!

displayUsersFromState(myprops) {
  console.log("hey from displayUsers");
  let users = myprops.users;
  
  //debugger;

    /*id is giving us index of array in map function --> 
    see http://stackoverflow.com/questions/20003676/how-to-get-current-index-in-array-prototype-map
    and is used as a key in li element*/
    return (users.map((user,id) => {

      //if (user.first)
      console.log("id:"+id);
      if(id!=0)
        return(<tr>
          <td>
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
          <td>
           {user.age}
          </td>
          <td>
           {user.sex}
          </td>
          <td>
           {user.kettl}
         </td>
          <td>
           {user.MIB}
         </td>
          <td>
           {user.KVMG}
          </td>
          <td>
           {user.CV} 
          </td>
          <td>
          {user.KA}
          </td>
          <td>
           {user.KB} 
          </td>
          <td>
          {user.CF} 
          </td>
          <td>
          {user.TRX_}  
          </td>
          <td>
          {user.WC} 
          </td>
          <td>
          {user.ADG} 
          </td>
          <td>
          {user.sms}
          </td>
          <td>
          {user.receive_email}
          </td>
          <td>
          {user.payed}
          </td>
          <td>
          {user.payment_date}
          </td>
          </tr>)
      else 
        return("")
    }))
      


}

//if we want to trigger an action we call myprops this.getallusers. This is not necessary 
//because the state of this is the users that are saved. displayUsersFromLocalStorage only displays the 
//users which is equal to our state. no change to the state happens here!!!!!!!


displayUsersFromLocalStorage() {
  //console.log("hey from displayUsersFromLocalStorage");

  //console.log("Users from local storage:"+localStorage.getItem("users")); 

  if(localStorage.length<=1){
    //return (<tr><td>No user exist in database</td></tr>);
    //console.log("no user exist in local storage");
    return(<tr><td colSpan="22">Δεν υπάρχουν πελάτες</td></tr>)
  }
  else{
  let users = JSON.parse(localStorage.getItem("users"));
  //let users = [usersStorage];
  //console.log(users);
  //var htmlstr="undefined";
//debugger;

    
    
    /*id is giving us index of array in map function --> 
    see http://stackoverflow.com/questions/20003676/how-to-get-current-index-in-array-prototype-map
    and is used as a key in li element*/

   
    return (users.map((user,id) => {
      //debugger;
      //if (user.first)
      //console.log("id:"+id);
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

      if((!user.empty)&&(user.first!="first"))
        return(
        <tr>
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
        </tr>)
      else 
        return("")
    }))
  }
}
 render() {
  const {users} = this.props;
  
  //debugger;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-11"> <legend> Πελατολόγιο</legend></div>
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
                   <tr>
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
                  </tr>
                    </thead>
                <tbody>
                  {this.displayUsersFromLocalStorage()}
                </tbody>
              </table>
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

export default GetAllUsers;