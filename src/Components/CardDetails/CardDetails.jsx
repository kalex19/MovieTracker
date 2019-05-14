import React from 'react';
import './CardDetails.scss';
import { Link } from 'react-router-dom';
import Styles from './CardDetails.scss';
import PropTypes from 'prop-types';

const CardDetails = ({ id, title }) => {
	const type = 'popular';
	return (
		<div>
			<Link to={`${type}/${id}`} className="back-btn">
				{' '}
				◀ back
			</Link>
			<h1>{title}</h1>
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
