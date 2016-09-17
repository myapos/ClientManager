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
          {id} sdaasd
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
  console.log("hey from displayUsersFromLocalStorage");

  console.log("Users from local storage:"+localStorage.getItem("users")); 

  if(localStorage.length<=1){
    //return (<tr><td>No user exist in database</td></tr>);
    console.log("no user exist in local storage");
    return(<tr><td colSpan="22">Δεν υπάρχουν πελάτες</td></tr>)
  }
  else{
  let users = JSON.parse(localStorage.getItem("users"));
  //console.log("testtttttt");
  console.log(users);
     
    
    /*id is giving us index of array in map function --> 
    see http://stackoverflow.com/questions/20003676/how-to-get-current-index-in-array-prototype-map
    and is used as a key in li element*/


    return (users.map((user,id) => {
      //debugger;
      //if (user.first)
      //console.log("id:"+id);
      console.log("kettl!!!!"+user.kettl);
      let classes = "";
      let classesArr = [];
      let dummy_var=0;
      
      (user.kettl=="true") ? (classesArr.push("Κέτλεμπελς")): (dummy_var=1);
      (user.MIB=="true") ? (classesArr.push("Made In Brazil")) : (dummy_var=1);
      (user.KVMG=="true") ? (classesArr.push("Krav Maga Stay Away")) : (dummy_var=1);
      (user.CV=="true") ? (classesArr.push("Civillian")) :(dummy_var=1);
      (user.KA=="true") ? (classesArr.push("Krav Maga Kiddy")) : (dummy_var=1);
      (user.KB=="true") ? (classesArr.push("Krav Maga Kids")) : (dummy_var=1);
      (user.CF=="true") ? (classesArr.push("Crossfit")) : (dummy_var=1);
      (user.TRX_=="true") ? (classesArr.push("TRX")) : (dummy_var=1);
      (user.WC=="true") ? (classesArr.push("Women's corner")) : (dummy_var=1);
      (user.ADG=="true") ? (classesArr.push("Adaptive gym")) : (dummy_var=1);
      
      console.log("length:"+classesArr.length);

      if(classesArr.length==1)
        classes = classesArr[0];
      else
      classesArr.map( (classesArr, idc) => {

        console.log("classesArr:" + classesArr + " idc:" + idc);

        if (idc == classesArr.length - 1){
          classes += classesArr;
          console.log("aaaaaaaaaaaaaaaaa:"+classes);
        }
        //else classes += classesArr + ",";

      });
      
      /*
      (user.kettl=="true") ? (classes += "Κέτλεμπελς, ") : (classes += "");
      (user.MIB=="true") ? (classes += "Made In Brazil, ") : (classes += "");
      (user.KVMG=="true") ? (classes += "Krav Maga Stay Away, ") : (classes += "");
      (user.CV=="true") ? (classes += "Civillian, ") : (classes += "");
      (user.KA=="true") ? (classes += "Krav Maga Kiddy, ") : (classes += "");
      (user.KB=="true") ? (classes += "Krav Maga Kids, ") : (classes += "");
      (user.CF=="true") ? (classes += "Crossfit, ") : (classes += "");
      (user.TRX_=="true") ? (classes += "TRX, ") : (classes += "");
      (user.WC=="true") ? (classes += "Women's corner, ") : (classes += "");
      (user.ADG=="true") ? (classes += "Adaptive gym, ") : (classes += "");
      */
      if(!user.empty){
        return(
        <tr>
          <td>
          {id} dadsad 
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
           {user.kettl} {classes}
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
          //empty variables for next user
          classes = "";
          classesArr = [];
      }
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
                    <th>
                    A/A
                    </th>
                    <th>
                    Όνομα
                    </th>
                    <th>
                    Επίθετο
                    </th>
                    <th>
                     E-mail
                    </th>
                    <th>
                     Κινητό
                    </th>
                    <th>
                     Ημερομηνία
                    </th>
                    <th>
                     Ηλικία
                    </th>
                    <th>
                     Φύλλο
                    </th>
                    <th>
                     Τμήματα
                   </th>
                    <th>
                     Made in brazil
                   </th>
                    <th>
                     Kravmaga
                    </th>
                    <th>
                     Civilian 
                    </th>
                    <th>
                    Kids A
                    </th>
                    <th>
                     Kids B 
                    </th>
                    <th>
                    Crossfit 
                    </th>
                    <th>
                    TRX  
                    </th>
                    <th>
                    Womens Corner
                    </th>
                    <th>
                    Adaptive_gym 
                    </th>
                    <th>
                    SMS 
                    </th>
                    <th>
                    Receive email?
                    </th>
                    <th>
                    Payed?
                    </th>
                    <th>
                    Payment date
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