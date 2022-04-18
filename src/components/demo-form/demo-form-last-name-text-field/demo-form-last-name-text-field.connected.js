import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import {
  selectDemoFormLastName,
  updateDemoFormLastName,
} from 'store/demo-form/demo-form';

function mapStateToProps(state) {
  return {
    fullWidth: true,
    label: 'Last Name',
    required: true,
    value: selectDemoFormLastName(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) => dispatch(updateDemoFormLastName(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
