import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Controls} from '../Components/Controls/Controls';


describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Controls / > );
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})