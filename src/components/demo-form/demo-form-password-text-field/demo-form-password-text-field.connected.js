import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import {
  selectDemoFormPassword,
  updateDemoFormPassword,
} from '../../../store/demo-form/demo-form';

function mapStateToProps(state) {
  return {
    value: selectDemoFormPassword(state),
    type: 'password',
    required: true,
    label: 'Password',
    fullWidth: true,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) => dispatch(updateDemoFormPassword(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
