import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';
import './CardDetails.scss';
import PropTypes from 'prop-types';

export const CardDetails = ({id, title, type, poster_path , vote_average, overview, backdrop_path, release_date}) => {

	return (
		<article> 
			<Link to={`/${type}`} className="back-btn"> ◀ back</Link>
			<img src={'http://image.tmdb.org/t/p/w1280' + backdrop_path} alt={`${title} backdrop`} className="backdrop"/>
			<h1>{title}</h1>
			<img src={'http://image.tmdb.org/t/p/w500' + poster_path} alt={`${title} Poster`}/>
			<section className="overview-wrapper">
			<p>{overview}</p>
			<p>{vote_average}</p>
			<p>{release_date}</p>
			</section>
		</article>
	);
};

export default CardDetails;

CardDetails.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.string,
	type: PropTypes.string
};
