import { useState } from 'react';
import MainNavBtn from './MainNavBtn';
import ColorChanger from '../../../common/ColorChanger';
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
			{/* ColorChanger를 사용하여 경로에 따라 텍스트 색상 변경 */}
			<ColorChanger>
				{color => (
					<div style={{ color }}>
						<MainNavBtn navArr={navArr} />
					</div>
				)}
			</ColorChanger>
			<div className='firstfollow' onClick={toggleGallery} style={{ cursor: 'pointer' }}>
				<p>노인장기요양보험이란</p>
			</div>
			{/* FirstFollow 컴포넌트를 추가하고, showGallery와 toggleGallery를 전달 */}
			<FirstFollow showGallery={showGallery} toggleGallery={toggleGallery} />
			<NoticeBanner />
		</section>
	);
}
