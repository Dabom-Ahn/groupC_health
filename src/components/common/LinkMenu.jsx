import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LinkMenu({ linkArr }) {
	const [Index, setIndex] = useState(null);

	const outerStyle = {
		width: '80%',
		margin: '0px auto',
		display: 'flex',
		justifyContent: 'space-between'
	};

	const btnStyle = {
		width: '14%',
		height: 40,
		backgroundColor: '#ccc',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '0.8rem',
		cursor: 'pointer',
		color: '#555'
	};

	const btnActiveStyle = {
		color: 'hotpink'
	};

	return (
		<nav style={outerStyle}>
			{linkArr.map((el, idx) => (
				<Link
					style={Index === idx ? { ...btnStyle, ...btnActiveStyle } : btnStyle}
					key={idx}
					to={el.path}
					onMouseEnter={() => setIndex(idx)}
					onMouseLeave={() => setIndex(null)}>
					{el.label}
				</Link>
			))}
		</nav>
	);
}
