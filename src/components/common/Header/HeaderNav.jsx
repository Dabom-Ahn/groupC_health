import { Link } from 'react-router-dom';

export default function HeaderNav({ menu, index, hoveredMenu, selectedMenu, setHoveredMenu, handleMenuClick }) {
	return (
		<div
			className={`menuItem${index}`}
			onMouseEnter={() => setHoveredMenu(index)}
			onMouseLeave={() => setHoveredMenu(null)}
			onClick={() => handleMenuClick(index)}>
			<Link className='menulink' to={menu.link}>
				{menu.title}
			</Link>
			{(hoveredMenu === index || selectedMenu === index) && (
				<div className={`modalMenu${index}`}>
					{menu.subMenu.map((subItem, subIndex) => (
						<Link key={subIndex} className={`submenuItem${index}`} to={subItem.link}>
							{subItem.name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
