import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import {
  selectDemoFormFirstName,
  updateDemoFormFirstName,
} from 'store/demo-form/demo-form';

function mapStateToProps(state) {
  return {
    fullWidth: true,
    label: 'First Name',
    required: true,
    value: selectDemoFormFirstName(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) => dispatch(updateDemoFormFirstName(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
