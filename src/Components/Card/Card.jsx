import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ title, image, id, type }) => {
	return (
		<Link to={`${type}/${id} `} key={id} className="card">
			<h3 className="cardTitle">{title}</h3>
			<img src={'http://image.tmdb.org/t/p/w200' + image} alt="movie poster" className="cardImage" />
		</Link>
	);
};

export default Card;

Card.propTypes = {
	type: PropType.string,
	id: PropType.num,
	image: PropType.string,
	title: PropType.string
};
