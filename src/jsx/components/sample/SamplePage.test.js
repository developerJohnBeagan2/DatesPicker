import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {SamplePage} from './SamplePage';

function setup() {
  const props = {
    datesPicked: [],
    formFields: {},
    actions: {}
  };
  return mount(<SamplePage {...props} />);
}

describe('SamplePage', () => {
  it('SamplePage should mount', () => {
    //arrange
    const wrapper = setup();
    //act
    //assert
    expect(true).toEqual(true);
  });
  it('Pick future dates button exists', () => {
    //arrange
    const wrapper = setup();
    //act
    //assert
    expect(wrapper.find('#idDatePicker').length).toBe(1);
  });
});

