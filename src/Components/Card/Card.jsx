import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ title, image, id, type }) => {
	return (
		<Link to={`/popular/${id} `} key={id} className="card">
			<div className="card-wrapper">
				<h3 className="cardTitle">{title}</h3>
				<img src={'http://image.tmdb.org/t/p/w200' + image} alt="movie poster" className="cardImage" />
				<i class="fas fa-star" />
			</div>
		</Link>
	);
};

export default Card;

Card.propTypes = {
	type: PropTypes.string,
	id: PropTypes.number,
	image: PropTypes.string,
	title: PropTypes.string
};

// return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
