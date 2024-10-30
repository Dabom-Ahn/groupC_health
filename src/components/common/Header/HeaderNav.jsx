import { Link } from 'react-router-dom';

export default function HeaderNav({ menu, index, setHoveredMenu, handleMenuClick }) {
	return (
		<div
			className={`menuItem${index}`}
			onMouseEnter={() => setHoveredMenu(index)}
			onMouseLeave={() => setHoveredMenu(null)}
			onClick={() => handleMenuClick(index)}>
			<Link className='menulink' to={menu.link}>
				{menu.title}
			</Link>
		</div>
	);
}
