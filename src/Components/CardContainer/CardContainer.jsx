import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './CardContainer.scss';
import PropTypes from 'prop-types';

export const CardContainer = props => {
	const nowPlaying = props.nowPlaying;
	const popular = props.popular;

	let display;

	if (props.category === 'nowPlaying' && nowPlaying !== undefined) {
		display = nowPlaying.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} type={movie.type}/>;
		});
	}

	if (props.category === 'popular' && popular !== undefined) {
		display = popular.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} type={movie.type} />;
		});
	}

	return <main className="cardContainer">{display}</main>;
};

const mapStateToProps = ({popular, nowPlaying}) => ({
	popular: popular,
	nowPlaying: nowPlaying
});

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
	popular: PropTypes.array,
	nowPlaying: PropTypes.array,
	id: PropTypes.number,
	image: PropTypes.string,
	title: PropTypes.string
};
