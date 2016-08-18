import {ADD_USER} from '../actions/client';

export default function adduser(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case ADD_USER:{
      //let newState = Object.assign({}, state.adduser, action.payload);
      debugger;
      //initializations
      let newState = new Array();
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
      }
      else if((state.length>1)&&(previoususers.length>1)){
        console.log("State is not empty and previous users exist");
        //retrieve previous users to newState
        previoususers = JSON.parse(localStorage.getItem("users"));
        newState = previoususers;
      }

      //save users to newState
      newState.push(action.payload);
      console.log("Saved new state:"+newState);
      
      //save newState in localstorage

      console.log("Saved new state in local storage");
      localStorage.setItem("users", JSON.stringify(newState));
      //console.log("Users from local storage:"+localStorage.getItem("users")); 
      return newState;
    }
    default:
      return state;
  }
}
