import {EXPORT_USERS} from '../actions/client';

export default function exportusers(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case EXPORT_USERS:{
      
      let newState = new Array();
      newState=action.users;
      //newState = action.users.splice(1, action.users.length);
      debugger;
      alert("Users exported succesfully");
      return newState; //in newState we save exported users
    }
    default:
      return state;
  }
}
