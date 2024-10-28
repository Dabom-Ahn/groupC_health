import { useState } from 'react';
import MainNavBtn from './MainNavBtn';
import FirstFollow from '../FirstVisit/FirstFollow';
import NoticeBanner from '../NoticeBanner/NoticeBanner';

export default function MainNav() {
	const navArr = ['client', 'manager'];
	const [showGallery, setShowGallery] = useState(false);

	const toggleGallery = () => {
		setShowGallery(prevState => !prevState);
	};

	return (
		<section className='mainNav'>
			{/* MainNavBtn 컴포넌트는 navArr을 전달받아 렌더링 */}
			<div>
				<MainNavBtn navArr={navArr} />
			</div>
			<div className='firstfollow' onClick={toggleGallery} style={{ cursor: 'pointer' }}>
				<p>노인장기요양보험이란</p>
			</div>
			{/* FirstFollow 컴포넌트를 추가하고, showGallery와 toggleGallery를 전달 */}
			<FirstFollow showGallery={showGallery} toggleGallery={toggleGallery} />
			<NoticeBanner />
		</section>
	);
}
