import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';

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
