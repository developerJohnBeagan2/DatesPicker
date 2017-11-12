import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {DatesPickerModal} from './DatesPickerModal';


function setup() {
  const props = {
    savePickedDates: () => {},
    selectedDates: []
  };
  return mount(<DatesPickerModal {...props} />);
}


describe('DatesPickerModal', () => {

  it('DatesPickerModal should mount', () => {
    //arrange
    const wrapper = setup();
    //act
    //assert
    expect(true).toEqual(true);
  });

  it('Calendar button links', () => {
    //arrange
    const wrapper = setup();
    //act
    const numButtons = wrapper.find('button').length;
    //assert
    expect(35).toEqual(numButtons);
    expect(0).toEqual(wrapper.state().selectedDates.length);
  });

  it('Click 15th link, should add selected date to array', () => {
    //arrange
    const wrapper = setup();
    //act
    const numButton = wrapper.find('button').at(15).find('button');
    numButton.simulate('click');
    //assert
    expect(1).toEqual(wrapper.state().selectedDates.length);
  });

});




/*
  describe('', () => {
    it('', () => {
      //arrange
      //act
      //assert
    });
  });
*/

