import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {App} from './App';

function setup() {
  const props = {
    match: {}
  };
  return shallow(<App {...props} />); // enzyme
}

describe('App', () => {
  it('App should exist', () => {
    //arrange
    const wrapper = setup(); // enzyme wrapper
    //act

    //assert
    expect(wrapper.find('h1').text()).toEqual('Modal Dates Picker Sample');
  });
});

