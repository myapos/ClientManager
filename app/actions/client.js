export const ADD_USER = 'ADD_USER';
export const USER_SELECTED = 'USER_SELECTED';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const IMPORT_USERS = 'IMPORT_USERS';
export const EXPORT_USERS = 'EXPORT_USERS';

export function adduser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}

export function deleteuser(users, id) {
  return {
    type: DELETE_USER,
    users: users,
    id: id
  };
}

export function updateuser(user, users) {
  return {
    type: UPDATE_USER,
    user:user,
    users: users
  };
}

export function importusers(users) {
  return {
    type: IMPORT_USERS,
    users: users
  };
}

export function exportusers(users) {
  return {
    type: EXPORT_USERS,
    users: users
  };
}

export const getallusers = (users) => {
    //console.log("You clicked on user: ", user.first);
    return {
        type: GET_ALL_USERS,
        payload: users
    };
}

