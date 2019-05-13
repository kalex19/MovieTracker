import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';
import Styles from './CardDetails.scss';
import PropTypes from 'prop-types';

const CardDetails = ({ id, title, image, type }) => {
	return (
		<div>
			<Link to={`/${type}`} className="back-btn">
				◀ back
			</Link>
			<h1>{title}</h1>
			<img src={image} className="app-img-no-hover" />
			<p className="movie-info">{}</p>
		</div>
	);
};

export default CardDetails;

CardDetails.propTypes = {
	id: PropType.num,
	title: PropType.string,
	image: PropType.string,
	type: PropType.string
};
