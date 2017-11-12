import expect from 'expect';
import datesPickerReducer from './datesPickerReducer';
import * as actions from '../actions/sampleActions';

describe('Dates Picker Reducer', () => {
  it('save/replaced list of picked date objects: UPDATE_DATES_PICKED_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 20171106, year: 2017, month: 11, day: 6}
    ];

    const datesPicked = [
      {id: 20171101, year: 2017, month: 11, day: 1},
      {id: 20171105, year: 2017, month: 11, day: 5},
      {id: 20171109, year: 2017, month: 11, day: 9}
    ];

    const action = actions.saveDatesPickedSuccess(datesPicked);

    // act
    const newState = datesPickerReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
  });

});
