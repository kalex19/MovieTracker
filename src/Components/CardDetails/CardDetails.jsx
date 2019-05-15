import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';
import './CardDetails.scss';
import PropTypes from 'prop-types';

export const CardDetails = ({id, title, type, poster_path }) => {
	console.log('details imag',poster_path, "type", type)
	return (
		<div>
			<Link to={`/${type}`} className="back-btn"> ◀ back</Link>
			<h1>{title}</h1>
			<img src={'http://image.tmdb.org/t/p/w200' + poster_path} alt={`${title} Poster`}/>
		</div>
	);
};

export default CardDetails;

CardDetails.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.string,
	type: PropTypes.string
};
