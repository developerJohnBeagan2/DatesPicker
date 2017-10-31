import * as types from './actionTypes';

export function saveDatesPickedSuccess(course) {
  return {type: types.UPDATE_DATES_PICKED_SUCCESS, course};
}

export function saveFormFieldsSuccess(course) {
  return {type: types.UPDATE_FORM_FIELDS_SUCCESS, course};
}


export function saveDatesPicked(datesPicked) {
  return function (dispatch, getState) {
    return dispatch(saveDatesPickedSuccess(datesPicked));
  };
}

export function saveFormFields(formFields) {
  return function (dispatch, getState) {
    return dispatch(saveFormFieldsSuccess(formFields));
  };
}
