import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {CardContainer} from '../Components/CardContainer/CardContainer';


describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <CardContainer/> );
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})