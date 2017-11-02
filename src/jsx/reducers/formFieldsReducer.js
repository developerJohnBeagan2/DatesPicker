import * as types from '../actions/actionTypes';
import initialState from '../models/initialState';

/*
    ... spread operator destructures array in to list of strings
*/
export default function formFields(state = initialState.formFields, action) {
  switch (action.type) {

    case types.UPDATE_FORM_FIELDS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.formFields)
      ];

    default:
      return state;
  }
}
