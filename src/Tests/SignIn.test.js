import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow
} from 'enzyme';
import SignIn from '../Components/SignIn/SignIn';


describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < SignIn / > );
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})