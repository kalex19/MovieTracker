import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from '../Components/App/App';

jest.mock('../Thunks/fetchNowPlaying');
jest.mock('../Thunks/fetchPopular');

const fetchNowPlaying = jest.fn();
const fetchPopular = jest.fn();

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />, { disableLifecycleMethods: true });
	});

	afterEach(() => {
		fetchNowPlaying.mockClear();
		fetchPopular.mockClear();
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it.skip('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
});
