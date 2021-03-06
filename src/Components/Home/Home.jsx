import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Home.scss';
import PropTypes from 'prop-types';

export function Home(props){
	const popular = props.popular;
	const nowPlaying = props.nowPlaying;

	let displayNow;
	let displayPop;

	if (props.isLoading) {
		return <section>Loading...</section>;
	} else {
		displayNow = nowPlaying.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
		});
		if (props.isLoading) {
			return <section>Loading...</section>;
		} else {
			displayPop = popular.map(movie => {
				return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
			});
		}
	}

	return (
		<div className="home">
			{displayNow}
			{displayPop}
		</div>
	);
}

const mapStateToProps = ({ popular, nowPlaying, isLoading }) => ({
	popular,
	nowPlaying,
	isLoading
});

export default connect(mapStateToProps)(Home);

Home.propTypes = {
	popular: PropTypes.array,
	nowPlaying: PropTypes.array,
	id: PropTypes.number,
	title: PropTypes.string,
	poster_path: PropTypes.string,
	isLoading: PropTypes.bool
};
