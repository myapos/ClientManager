import {combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux';
import getallusers from './getallusers';
import adduser from './adduser';
import deleteduser from './deleteuser';
import updateuser from './updateuser';
import importusers from './importusers';
import exportusers from './exportusers';

const toApp = combineReducers({
  adduser,
  getallusers,
  deleteduser,
  updateuser,
  importusers,
  exportusers,
  routing
})

export default toApp