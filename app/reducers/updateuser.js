import {UPDATE_USER} from '../actions/client';

export default function updateuser(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case UPDATE_USER:{
      
      debugger;
      let id = action.user.id;
      let newState = new Array();

      if(localStorage.length==1){
        //let empty = [{"empty":"no user"}];
        localStorage.setItem("users", JSON.stringify(state)); 
      }
      //newState = state;
      //check if newState is empty and a previous state was saved in localstorage
      //if it was then retrieve previous users
      //debugger;
      let previoususers = JSON.parse(localStorage.getItem("users"));
      //console.log(previoususers);
     

      if((state.length==1)&&(previoususers.length==1)){
        console.log("State is empty and no previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState = previoususers;
        action.users = newState;
      }
      else if((state.length==1)&&(previoususers.length>2)){
        console.log("State is empty but previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState = previoususers;
        action.users = newState;
      }
      else if((state.length>1)&&(previoususers.length>2)){
        console.log("State is not empty and previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState=action.users;
      }

      //newState=action.users;

       //let index=1; //ignore the first item. it contains empty user

       let length  = action.users.length;
       let i=1;
       //ignore the first item. it contains empty user
       for (i;i<length;i++){
        if (action.users[i].id==id){
          console.log("Found it in index: "+i);
          action.users[i] = action.user; //update user in userlist
          //debugger;
          newState=action.users;
          localStorage.setItem("users", JSON.stringify(newState)); //save in local storage the array without the updated item
          console.log("Saved new state in local storage");
          //return newState; //in newState we save deleted userss
          break;
        }

       }
      

      return newState; //in newState we save updated users
    }
    default:
      return state;
  }
}
