import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddUser from '../components/AddUser';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
    adduser: state.adduser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);