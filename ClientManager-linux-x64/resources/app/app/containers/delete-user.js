import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DeleteUser from '../components/DeleteUser';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
  	users:state.adduser,
    deleteduser: state.deleteuser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);