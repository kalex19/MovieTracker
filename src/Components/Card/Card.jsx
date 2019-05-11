import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, image, id, type }) => {
	return (
		<Link to={`${type}/${id} `} key={id}>
			<h3>{title}</h3>
			<img src={'http://image.tmdb.org/t/p/w200' + image} alt="movie poster" />
		</Link>
	);
};

export default Card;
