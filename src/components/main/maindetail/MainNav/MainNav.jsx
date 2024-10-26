import { useState } from 'react';
import MainNavBtn from './MainNavBtn';
import BackgroundChanger from './BackgroundChanger';
// import NoticeBanner from '../Banner/NoticeBanner';

export default function BackgroundChange() {
	const navArr = ['client', 'manager'];
	const [selectedNav, setSelectedNav] = useState(null);

	// MainNavBtn 클릭 핸들러
	const handleClick = data => {
		setSelectedNav(data);
	};

	return (
		<section className='MainNav'>
			<BackgroundChanger colorKey={selectedNav} />
			<MainNavBtn navArr={navArr} onClick={handleClick} />
			{/* <NoticeBanner /> */}
		</section>
	);
}
