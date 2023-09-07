import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

const Card = ({ title, coverImage }) => {
	const [isMouse, setIsMouse] = useState(false);

	return (
		<div
			className={`${style.container}`}
			onMouseEnter={() => setIsMouse(true)}
			onMouseLeave={() => setIsMouse(false)}
			style={{ backgroundImage: `url(${coverImage})` }}
		>
			{isMouse ? <div className={`${style.title}`}>{title}</div> : null}
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string.isRequired,
	coverImage: PropTypes.string.isRequired,
};

export default Card;
