import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderNav from './HeaderNav';
import headerMenuData from '../../../data/headermenuData';

export default function Header() {
	const location = useLocation(); // 현재 경로 가져오기
	const [hoveredMenu, setHoveredMenu] = useState(null); // 마우스 오버 상태
	const [selectedMenu, setSelectedMenu] = useState(null); // 클릭 상태

	const handleMenuClick = index => {
		// 같은 메뉴를 클릭하면 닫고, 다른 메뉴를 클릭하면 해당 메뉴를 열기
		setSelectedMenu(selectedMenu === index ? null : index);
	};

	return (
		<>
			<header className='header'>
				<div className='upperheader'>
					<HeaderLogo />
					<HeaderSearch />
				</div>
				{/* 현재 경로가 '/'가 아닐 때만 headerNav를 표시 */}
				{location.pathname !== '/' && (
					<div className='headerNav'>
						{headerMenuData.map((menu, index) => (
							<HeaderNav
								key={index}
								menu={menu}
								index={index}
								hoveredMenu={hoveredMenu}
								selectedMenu={selectedMenu}
								setHoveredMenu={setHoveredMenu}
								handleMenuClick={handleMenuClick}
							/>
						))}
					</div>
				)}
			</header>
		</>
	);
}
