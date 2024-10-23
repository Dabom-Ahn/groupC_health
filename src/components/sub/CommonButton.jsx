import { Link } from 'react-router-dom';

export default function CommonButton({ label, path, isSelected, onClick }) {
	const opacityStyle = isSelected ? 1 : 0;

	return (
		<div className='buttonWrapper'>
			<Link
				to={path}
				className='buttonItem'
				onClick={onClick}
				style={{ opacity: opacityStyle, transition: 'opacity 0.12s' }}>
				{label.toUpperCase()}
			</Link>
		</div>
	);
}
