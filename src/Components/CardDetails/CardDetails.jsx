import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';
import './CardDetails.scss';
import PropTypes from 'prop-types';

export const CardDetails = ({id, title, type, poster_path , vote_average, overview, backdrop_path, release_date}) => {

	return (
		<article> 
					<Link to={`/${type}`} className="back-btn"> ◀ BACK</Link>
				<section className="overview-wrapper">
					<img src={'http://image.tmdb.org/t/p/w500' + poster_path} alt={`${title} Poster`} className="poster"/>
					<section className="details-wrapper">
						<h1 className="poster-title">{title}</h1>
						<p className="details">{overview}</p>
						<p className="details">IMDB rating {vote_average}</p>
						<p className="details">Release Date {release_date}</p>
					</section>
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
