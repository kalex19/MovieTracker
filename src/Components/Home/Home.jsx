import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Home = () => {
	const { popular, nowPlaying } = this.props;

	if (nowPlaying !== undefined) {
		nowPlaying = nowPlaying.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
		});
	}

	if (popular !== undefined) {
		popular = popular.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
		});
	}

	return (
		<div>
			<h3> Hello</h3>
			<h4> Click on the links above to see a variety of movies </h4>
			{nowPlaying}
			{popular}
		</div>
	);
};

const mapStateToProps = ({ popular, nowPlaying }) => ({
	popular,
	nowPlaying
});

export default connect(mapStateToProps)(Home);
