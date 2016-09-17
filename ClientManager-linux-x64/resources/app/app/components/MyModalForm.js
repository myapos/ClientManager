var React = require('react');
var ReactDOM = require('react-dom');
//var Modal = require('react-modal');
//import MyModalForm from './MyModalForm';
 
//var appElement = document.getElementById('your-app-element');
 
/*
By default the modal is anchored to document.body. All of the following overrides are available.
 
* element
Modal.setAppElement(appElement);
 
* query selector - uses the first element found if you pass in a class.
Modal.setAppElement('#your-app-element');
 
*/
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var MyModalForm = React.createClass({
 setValues : function(user){
    //debugger;
    console.log("hey from setValues");
    console.log("user:"+user.first);
    //this.document.getElementById("id1").innerHTML= user.first;
    //this.document.getElementById("idmodal1").value;
    () => {this.refs.idmodal1.value = user.first;}
    //this.document.getElementById("id1").innerHTML= user.first;
  },
  render: function() {
    const user = this.props.user;
    const userupdatefunc = this.props.userupdatefunc;

    return (
      <div>
          <form>
            Όνομα : <br/>
            <input type='text' id='idmodal1' ref='idmodal1'/> <br/>
            Επώνυμο : <br/>
            <input type='text' id='id2' /> <br/>
            <input type='text' id='id3' /> <br/>
            <input type='text' id='id4' /> <br/>
          </form>
          {this.setValues(user)}
      </div>

    );
  }
});

module.exports = MyModalForm;
//ReactDOM.render(<App/>, appElement);