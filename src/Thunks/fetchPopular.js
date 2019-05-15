import { isLoading, getPopular, hasErrored } from '../actions';
import {fetchPopularCleaner} from '../Util/Cleaners/fetchPopularCleaner';

export const fetchPopular = url => {
	return async dispatch => {
			try {
			dispatch(isLoading(true));
			const response = await fetch(url);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			const popularList = data.results;
			const popular = fetchPopularCleaner(popularList)
			return Promise.all(popular)
		} catch (error) {
			dispatch(hasErrored(error.message));
		}
	};
};
