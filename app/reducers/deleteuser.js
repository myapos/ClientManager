import {DELETE_USER} from '../actions/client';

export default function deleteuser(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case DELETE_USER:{
      debugger;
      let newState = new Array();
      let deleted = new Array();

       //let index=1; //ignore the first item. it contains empty user
       if(localStorage.length==0){
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
      }
      else if((state.length==1)&&(previoususers.length>1)){
        console.log("State is empty but previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState = previoususers;
        action.users = previoususers;
      }
      else if((state.length>1)&&(previoususers.length>1)){
        console.log("State is not empty and previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState = previoususers;
      }
       let length  = action.users.length;
       let i=1;
       //ignore the first item. it contains empty user
       for (i;i<length;i++){
        if (action.users[i].id==action.id){
          console.log("Found it in index: "+i);
          //debugger;
          newState=action.users;
          deleted=newState.splice(i,1); //deletes the selected item
          localStorage.setItem("users", JSON.stringify(newState)); //save in local storage the array without the deleted item
          console.log("Saved new state in local storage");

          break;
        }
       }
      
      return deleted; //in newState we save deleted users
    }
    default:
      return state;
  }
}
