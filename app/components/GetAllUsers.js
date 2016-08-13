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

  if(localStorage.length==0){
    //return (<tr><td>No user exist in database</td></tr>);
    console.log("no user exist in local storage");
    return(<tr><td colSpan="20">no user exist in local storage</td></tr>)
  }
  else{
  let users = JSON.parse(localStorage.getItem("users"));
  //let users = [usersStorage];
  console.log(users);
  //var htmlstr="undefined";
//debugger;

    
    
    /*id is giving us index of array in map function --> 
    see http://stackoverflow.com/questions/20003676/how-to-get-current-index-in-array-prototype-map
    and is used as a key in li element*/

   
    return (users.map((user,id) => {

      //if (user.first)
      console.log("id:"+id);
      if(id!=0)
        return(
        <tr>
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
      <div>
        <div>
          <h2>Welcome to GetAllUsers page</h2>
           User List: <br/>
           <div className="table-responsive">
             <table className="table table-bordered table-hover">
             <thead>
             <tr>
                <th>
                Num
                </th>
                <th>
                First name
                </th>
                <th>
                Last name
                </th>
                <th>
                 email
                </th>
                <th>
                 mobile
                </th>
                <th>
                 date
                </th>
                <th>
                 age
                </th>
                <th>
                 Gender
                </th>
                <th>
                 Kettlebels
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
            </tr>
            </thead>
            <tbody>
              {this.displayUsersFromLocalStorage()}
            {/*this.displayUsersFromState(this.props)*/}
            </tbody>
              </table>
            </div>
            <br/>
            <Link to="/main">Back to control panel</Link>
        </div>
      </div>
    )
  }
}

export default GetAllUsers;