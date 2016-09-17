import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
//import routes from './routes';
//import toApp from './reducers'; //loads all the combined reducers from ./reducers/index.js

//let store = createStore(toApp);
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);





/*import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './user'
import App from './components/App'
let store = createStore(todoApp)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/
//JSON object--> JSON is string
/*
const userlist = '["data":{\
"firstname": "Myron",\
"lastname": "Apostolakis",\
}]'
const userlist = {"data":[
    {"firstname": "Myron", "lastname": "Apostolakis"}
  ]
};
*/
/*
var userList = {"data": [
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
        {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
        {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
    ]
};
*/
/*
function users(state = {userlist}, action) {
  switch (action.type) {
    case 'ADD_USER':
      //return state+1;
      var newdata = {"firstname": "Myron", "lastname": "Apostolakis"};
      //alert(store.getState().userlist.data[0].firstname+" "+store.getState().userlist.data[0].lastname);
      var userslength=state.userlist.data.length;
      var newstate = state;
      newstate.userlist.data[userslength]={"firstname": "Nick", "lastname": "Apostolakis"};
      return newstate;
      //var newstate = stare
    case 'DELETE':
        var userslength=state.userlist.data.length;
        state.userlist.data.splice(userslength-1, 1); // Removes last user from user list array element 
    default:
      return state;
  }
}
*/
/*
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      if (state.id !== action.id) {
        return state-1;
      }
    default:
      return state;
  }
}
*/
//const {createStore} = Redux;
/*const store = createStore(users);*/
//var store = createStore(counter);
/* 
const myFunction = () =>{
      store.dispatch({type:'INCREMENT'});
      console.log(store.getState);
      //alert("test");
    }
   */
   /*
    store.dispatch({type:'INCREMENT'});
      console.log(store.getState());
      store.dispatch({type:'INCREMENT'});
      console.log(store.getState());
*/
//store.dispatch({type:'INCREMENT'});

//document.getElementById("logo").addEventListener("click", myFunction());


//document.getElementById("logo")
/*
const render = () =>{
//document.body.innerText = store.getState().userlist;
  console.log(store.getState().userlist);
}
store.subscribe(render);
render();
document.addEventListener('click', ()=>{
  store.dispatch({type:'ADD_USER'});
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/