import HeaderLogo from './HeaderLogo';
import { FaHeadset, FaWrench } from 'react-icons/fa';
import ColorChanger from '../ColorChanger';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerMenuData from '../../../data/headermenuData';

export default function Header() {
	const [hoveredMenu, setHoveredMenu] = useState(null);

	return (
		<>
			<header className='header'>
				<div className='upperheader'>
					<HeaderLogo />
					<ColorChanger>
						{color => (
							<>
								<FaHeadset color={color} />
								<FaWrench color={color} />
							</>
						)}
					</ColorChanger>
				</div>
				<div className='headerNav'>
					{headerMenuData.map((menu, index) => (
						<div
							key={index}
							className='menuItem'
							onMouseEnter={() => setHoveredMenu(index)}
							onMouseLeave={() => setHoveredMenu(null)}>
							<Link className='Login' to={menu.link}>
								{menu.title}
							</Link>
							{hoveredMenu === index && (
								<div className='modalMenu'>
									{menu.subMenu.map((subItem, subIndex) => (
										<Link key={subIndex} className='submenuItem' to={subItem.link}>
											{subItem.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</header>
		</>
	);
}
