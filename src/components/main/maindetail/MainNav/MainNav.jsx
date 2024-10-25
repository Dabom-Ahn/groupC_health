import { useState } from 'react';
import MainNavBtn from './MainNavBtn';
import BackgroundChanger from './BackgroundChanger';

export default function BackgroundChange() {
	const navArr = ['client', 'manager', 'info', 'login'];
	const [selectedNav, setSelectedNav] = useState(null);

	// MainNavBtn 클릭 핸들러
	const handleClick = data => {
		setSelectedNav(data);
	};

	return (
		<section className='NavBtn'>
			<BackgroundChanger colorKey={selectedNav} />
			<MainNavBtn navArr={navArr} onClick={handleClick} />
		</section>
	);
}
