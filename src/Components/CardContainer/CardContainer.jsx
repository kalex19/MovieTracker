import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

const CardContainer = props => {
	const nowPlaying = props.nowPlaying.nowPlaying;
	const popular = props.popular.popular;

	let display;

	if (props.category === 'nowPlaying' && nowPlaying !== undefined) {
		display = nowPlaying.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
		});
	}

	if (props.category === 'popular' && popular !== undefined) {
		display = popular.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
		});
	}

	return <main>{display}</main>;
};

const mapStateToProps = state => ({
	popular: state.popular,
	nowPlaying: state.nowPlaying
});

export default connect(mapStateToProps)(CardContainer);
