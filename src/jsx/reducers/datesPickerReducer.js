import * as types from '../actions/actionTypes';
import initialState from '../models/initialState';

/*
    ... spread operator destructures array in to list of strings
*/
export default function datesPicked(state = initialState.datesPicked, action) {

  switch (action.type) {

    case types.UPDATE_DATES_PICKED_SUCCESS:
      return Object.assign([], action.datesPicked);

    default:
      return state;
  }
}
