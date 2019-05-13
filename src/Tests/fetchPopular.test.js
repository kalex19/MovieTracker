import { fetchNowPlaying } from '../Thunks/fetchNowPlaying';
import { fetchPopular } from '../Thunks/fetchPopular';
import { isLoading, hasErrored, getPopular } from '../actions';

jest.mock('../Thunks/fetchNowPlaying.js');

describe('fetchPopular', () => {
	let mockUrl;
	let mockDispatch;
	let mockMovie;
	let thunk;

	beforeEach(() => {
		thunk = fetchPopular(mockUrl);
		mockUrl = 'someurl.com';
		mockDispatch = jest.fn();
		mockMovie = [
			{
				vote_count: 4845,
				id: 299534,
				title: 'Avengers: Endgame',
				poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
				original_title: 'Avengers: Endgame'
			}
		];

		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () =>
					Promise.resolve({
						popular: mockMovie
					})
			})
		);
	});

	it('calls dispatch with isLoading(true)', () => {
		thunk(mockDispatch);

		expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
	});
	it('fetch gets called with correct params', () => {
		thunk(mockDispatch);
		expect(window.fetch).toHaveBeenCalledWith(mockUrl);
	});
	it('should dispatch hasError with an error message if the response is not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: false,
				statusText: 'Something went wrong'
			})
		);
		await thunk(mockDispatch);
		expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'));
	});
});
