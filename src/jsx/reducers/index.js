/*
    root reducer file
        by convention I think redux looks for this file
*/

import { combineReducers } from 'redux';
import datesPicked from './datesPickedReducer';
import formFields from './formFieldsReducer';

const rootReducer = combineReducers({
  datesPicked,
  formFields
});

export default rootReducer;


