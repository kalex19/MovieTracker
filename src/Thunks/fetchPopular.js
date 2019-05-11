import { isLoading, getPopular, hasErrored } from '../actions';

export const fetchPopular = url => {
	return async dispatch => {
		try {
			dispatch(isLoading(true));
			const response = await fetch(url);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			const popular = data.results;
			dispatch(isLoading(false));
			dispatch(getPopular(popular));
		} catch (error) {
			dispatch(hasErrored(error.message));
		}
	};
};
