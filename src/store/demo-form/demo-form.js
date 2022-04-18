import { createAction, handleActions } from 'redux-actions';

export const REDUCER_PREFIX = 'demo-form';

// Actions
const RESET = `${REDUCER_PREFIX}/RESET`;
const UPDATE_EMAIL_ADDRESS = `${REDUCER_PREFIX}/UPDATE_EMAIL_ADDRESS`;
const UPDATE_FIRST_NAME = `${REDUCER_PREFIX}/UPDATE_FIRST_NAME`;
const UPDATE_LAST_NAME = `${REDUCER_PREFIX}/UPDATE_LAST_NAME`;
const UPDATE_PASSWORD = `${REDUCER_PREFIX}/UPDATE_PASSWORD`;

// Action Creators
export const resetDemoForm = createAction(RESET);
export const updateDemoFormEmailAddress = createAction(UPDATE_EMAIL_ADDRESS);
export const updateDemoFormFirstName = createAction(UPDATE_FIRST_NAME);
export const updateDemoFormLastName = createAction(UPDATE_LAST_NAME);
export const updateDemoFormPassword = createAction(UPDATE_PASSWORD);

// Default State
export const DEFAULT_STATE = {
  emailAddress: '',
  firstName: '',
  lastName: '',
  password: '',
};

// Reducer
export const demoFormReducer = handleActions(
  {
    [RESET]: () => ({ ...DEFAULT_STATE }),
    [UPDATE_EMAIL_ADDRESS]: (state, { payload: emailAddress }) => ({
      ...state,
      emailAddress,
    }),
    [UPDATE_FIRST_NAME]: (state, { payload: firstName }) => ({
      ...state,
      firstName,
    }),
    [UPDATE_LAST_NAME]: (state, { payload: lastName }) => ({
      ...state,
      lastName,
    }),
    [UPDATE_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
  },
  DEFAULT_STATE
);

// Selectors
export const selectDemoForm = (state = {}) =>
  state[REDUCER_PREFIX] || DEFAULT_STATE;

export const selectDemoFormEmailAddress = (state) =>
  selectDemoForm(state).emailAddress || DEFAULT_STATE.emailAddress;
export const selectDemoFormFirstName = (state) =>
  selectDemoForm(state).firstName || DEFAULT_STATE.firstName;
export const selectDemoFormLastName = (state) =>
  selectDemoForm(state).lastName || DEFAULT_STATE.lastName;
export const selectDemoFormPassword = (state) =>
  selectDemoForm(state).password || DEFAULT_STATE.password;

// Thunks
