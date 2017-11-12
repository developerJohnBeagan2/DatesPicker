import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../models/initialState';
import * as sampleActions from '../actions/sampleActions';

describe('Store', function() {
  it('Should handle picking dates', function() {
    // arrange
    const store = createStore(rootReducer, initialState);

    const datesPicked = [
      {id: 20171101, year: 2017, month: 11, day: 1},
      {id: 20171105, year: 2017, month: 11, day: 5},
      {id: 20171109, year: 2017, month: 11, day: 9}
    ];

    // act
    const action = sampleActions.saveDatesPickedSuccess(datesPicked);
    store.dispatch(action);

    // assert
    const actual = store.getState().datesPicked;

    expect(actual.length).toEqual(3);
    expect(actual[2].id).toEqual(20171109);
  });
});
