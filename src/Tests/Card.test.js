import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow
} from 'enzyme';
import Card from '../Components/Card/Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Card / > );
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})