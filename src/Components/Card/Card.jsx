import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import PropTypes from 'prop-types';

export const Card = ({ title, image, id, type }) => {
	
	return (
		<Link to={`/${type}/${id} `} key={id} className="card">
			<div className="card-wrapper">
				<h3 className="cardTitle">{title}</h3>
				<img src={'http://image.tmdb.org/t/p/w200' + image} alt="movie poster" className="cardImage" />
				<i className="fas fa-star" />
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
