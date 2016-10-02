import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import DisplayUnpaidUsers from './components/DisplayUnpaidUsers';
import GetAllUsers from './containers/get-all-users';
import AddUser from './containers/add-user';
import DeleteUser from './containers/delete-user';
import UpdateUser from './containers/update-user';
import ImportUsers from './containers/import-users';
import ExportUsers from './containers/export-users';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/main" component={Main} />
    <Route path="/adduser" component={AddUser} />
    <Route path="/getallusers" component={GetAllUsers} />
    <Route path="/deleteuser" component={DeleteUser} />
    <Route path="/updateuser" component={UpdateUser} />
    <Route path="/importusers" component={ImportUsers} />
    <Route path="/exportusers" component={ExportUsers} />
    <Route path="/displayunpaidusers" component={DisplayUnpaidUsers} />
  </Route>
);
