import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UpdateUser from '../components/UpdateUser';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
  	users:state.adduser,
    updateduser: state.updateuser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);