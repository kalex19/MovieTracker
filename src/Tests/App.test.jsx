import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {App} from '../Components/App/App';
import {fetchNowPlaying} from '../Thunks/fetchNowPlaying';
import {fetchPopular} from '../Thunks/fetchPopular';

jest.mock("../Thunks/fetchNowPlaying")
jest.mock("../Thunks/fetchPopular")


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/> , {disableLifecycleMethods: true } );
  });

  afterEach(() => {
    fetchNowPlaying.mockClear();
    fetchPopular.mockClear();
  })


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})