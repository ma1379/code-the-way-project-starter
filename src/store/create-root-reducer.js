import { combineReducers } from 'redux';
import {
  demoFormReducer,
  REDUCER_PREFIX as DEMO_FORM,
} from './demo-form/demo-form';
import { sampleReducer, REDUCER_PREFIX as SAMPLE } from './sample/sample';

export function createRootReducer() {
  return combineReducers({
    [SAMPLE]: sampleReducer,
    [DEMO_FORM]: demoFormReducer,
  });
}
