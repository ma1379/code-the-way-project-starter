import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import {
  selectDemoFormEmailAddress,
  updateDemoFormEmailAddress,
} from '../../../store/demo-form/demo-form';

function mapStateToProps(state) {
  return {
    fullWidth: true,
    label: 'Email Address',
    required: true,
    type: 'email',
    value: selectDemoFormEmailAddress(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) =>
      dispatch(updateDemoFormEmailAddress(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
