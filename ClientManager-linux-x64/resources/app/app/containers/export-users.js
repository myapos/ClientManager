import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ExportUsers from '../components/ExportUsers';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
  	users:state.adduser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportUsers);