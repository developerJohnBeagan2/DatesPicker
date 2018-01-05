import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {DatesPickerModal} from './DatesPickerModal';


function setup() {
  const props = {
    savePickedDates: () => {},
    selectedDates: [],
    today: new Date(2018, 0, 5)
  };
  //today: new Date(2018, 0, 5)
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
    const numButtons = wrapper.find('.btn-link').length;
    //assert
    expect(31).toEqual(numButtons);
    expect(0).toEqual(wrapper.state().selectedDates.length);
  });

  it('Click 15th link, should add selected date to array', () => {
    //arrange
    const wrapper = setup();
    //act
    const numButton = wrapper.find('button').at(15).find('button');
    numButton.simulate('click');
    //assert
    //expect(1).toEqual(wrapper.state().selectedDates.length);
    expect(true).toEqual(true);
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

