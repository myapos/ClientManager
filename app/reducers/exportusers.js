import {EXPORT_USERS} from '../actions/client';

export default function exportusers(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case EXPORT_USERS:{
      
      debugger;
      
      let newState = new Array();
      newState=action.users;

      return newState; //in newState we save exported users
    }
    default:
      return state;
  }
}
