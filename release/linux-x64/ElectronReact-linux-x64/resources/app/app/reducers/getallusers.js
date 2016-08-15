import {GET_ALL_USERS} from '../actions/client';

export default function getallusers(state = [{"empty":"no user"}], action) {
    switch (action.type) {
        case GET_ALL_USERS:{
        let newState = new Array();
        newState = state;
        newState = action.payload;
        //newState.getallusers=state.adduser;
        return newState;
        }
    default:
    return state;
    }
    
}