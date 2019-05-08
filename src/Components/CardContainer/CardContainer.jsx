import React from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
	const data = props.data;
	const display = data.map(movie => {
		return <Card key={movie.id} title={movie.title} image={movie.poster_path} />;
	});

	return <main>{display}</main>;
};

export default CardContainer;
