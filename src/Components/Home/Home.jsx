import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

export function Home(props) {
	const popularProps = props.popular;
	const nowPlayingProps = props.nowPlaying;
	const popular = popularProps.popular;
	const nowPlaying = nowPlayingProps.nowPlaying;

	let displayNow;
	let displayPop;

	console.log("popular", popular, "nowPlaying", nowPlaying);
	



	if(props.isLoading) {
		return <section>Loading...</section>
	} else {
		displayNow = nowPlaying.map(movie => {
			return <Card id={movie.id} title={movie.title} image={movie.poster_path} />
		})
		if(props.isLoading) {
			return <section>Loading...</section>
		} else {
			displayPop = popular.map(movie => {
					return <Card id={movie.id} title={movie.title} image={movie.poster_path} />
			})
		}
	}

	return (
		<div>
			<h3> Hello</h3>
			<h4> Click on the links above to see a variety of movies </h4>
			{displayNow}
			{displayPop}
		</div>
	);
};

const mapStateToProps = ({ popular, nowPlaying, isLoading }) => ({
	popular,
	nowPlaying,
	isLoading
});

export default connect(mapStateToProps)(Home);
