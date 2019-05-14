import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './Home.scss';
import PropTypes from 'prop-types';

export function Home(props){
	const popularProps = props.popular;
	const nowPlayingProps = props.nowPlaying;
	const popular = popularProps.popular;
	const nowPlaying = nowPlayingProps.nowPlaying;

	let displayNow;
	let displayPop;

	console.log('popular', popular, 'nowPlaying', nowPlaying);

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
			<div className="helloMessage">
				<h3>What will it be tonight?</h3>
				<h4>Are you staying in or going out?</h4>
			</div>
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
