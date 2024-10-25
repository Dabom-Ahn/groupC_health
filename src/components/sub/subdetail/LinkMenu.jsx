import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LinkMenu({ linkArr }) {
	const [Index, setIndex] = useState(null);

	return (
		<>
			{linkArr.map((el, idx) => (
				<Link
					className={Index === idx ? 'btnActive' : 'btn'}
					key={idx}
					to={el.path}
					onMouseEnter={() => setIndex(idx)}
					onMouseLeave={() => setIndex(null)}>
					{el.label}
				</Link>
			))}
		</>
	);
}
