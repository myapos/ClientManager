import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GetAllUsers from '../components/GetAllUsers';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
  	users:state.adduser,
    getallusers: state.getallusers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsers);