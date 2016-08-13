import {IMPORT_USERS} from '../actions/client';

export default function importusers(state = [{"empty":"no user"}], action) {
  switch (action.type) {
    case IMPORT_USERS:{
      
      //debugger;
      
      let newState = new Array();
      //newState=action.users;

      //construct array of json objects in action.users[0] exists json keys
      let keys = new Array();
      keys = action.users[0];
      let keyssplitted = keys[0].split(",");
      let userJson={};

      for(let i=0;i<action.users.length;i++){
        //tokenize usersstrings
        debugger;
        let userssplitted = action.users[i][0].split(",");

        if(userssplitted.length>1){
          let id = keyssplitted[0];
          let first = keyssplitted[1];
          let last = keyssplitted[2];
          let usremail = keyssplitted[3];
          let mob = keyssplitted[4];
          let age = keyssplitted[5];
          let sex = keyssplitted[6];
          let date = keyssplitted[7];
          let kettl = keyssplitted[8];
          let MIB = keyssplitted[9];
          let KVMG = keyssplitted[10];
          let CV = keyssplitted[11];
          let KA = keyssplitted[12];
          let KB = keyssplitted[13];
          let CF = keyssplitted[14];
          let TRX_ = keyssplitted[15];
          let WC = keyssplitted[16];
          let ADG = keyssplitted[17];
          let sms = keyssplitted[18];
          let receive_email = keyssplitted[19]

          userJson ={
            id:userssplitted[0],
            first:userssplitted[1],
            last:userssplitted[2],
            usremail:userssplitted[3],
            mob:userssplitted[4],
            age:userssplitted[5],
            sex:userssplitted[6],
            date:userssplitted[7],
            kettl:userssplitted[8],
            MIB:userssplitted[9],
            KVMG:userssplitted[10],
            CV:userssplitted[11],
            KA:userssplitted[12],
            KB:userssplitted[13],
            CF:userssplitted[14],
            TRX_:userssplitted[15],
            WC:userssplitted[16],
            ADG:userssplitted[17],
            sms:userssplitted[18],
            receive_email:userssplitted[19] /**/
        }
        newState.push(userJson);
        }

      }

      console.log("Saved new state in local storage");
      localStorage.setItem("users", JSON.stringify(newState));

      return newState; //in newState we save imported users

    }
    default:
      return state;
  }
}
