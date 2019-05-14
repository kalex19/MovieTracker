import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow
} from 'enzyme';
import {
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Components/App/App';

configure({
  adapter: new Adapter()
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < App / > );
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})