import * as types from './actionTypes';


export function saveDatesPickedSuccess(datesPicked) {
  return {type: types.UPDATE_DATES_PICKED_SUCCESS, datesPicked};
}

export function saveFormFieldsSuccess(formFields) {
  return {type: types.UPDATE_FORM_FIELDS_SUCCESS, formFields};
}

//

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
