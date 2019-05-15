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

	describe('mapStateToProps', () => {
		it('should return a props object with a popular array, nowplaying array, and isloading bool', () => {
			const mockState = {
				popular: ['popular'],
				nowPlaying: ['nowPlaying'],
				isLoading: false,
			}

			const expected = {
				popular: mockState.popular,
				nowPlaying: mockState.nowPlaying,
				isLoading: mockState.isLoading
			}

			const mappedProps = mapStateToProps(mockState)

			expect(mappedProps).toEqual(expected)
		})
	})

	describe('mapDispatchToProps', () => {
		it('should call dispatch when using a function from MDTP', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = fetchNowPlaying('something.com')

			const mappedProps = mapDispatchToProps(mockDispatch)

			mappedProps.fetchNowPlaying('something.com')

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

		})

		it('should call dispatch when using a function from MDTP', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = fetchPopular('something.com')

			const mappedProps = mapDispatchToProps(mockDispatch)

			mappedProps.fetchPopular('something.com')

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

		})
	})


});
