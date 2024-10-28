// import { useState } from 'react';
import MainNavBtn from './MainNavBtn';
// import FirstFollow from '../FirstVisit/FirstFollow';
// import NoticeBanner from '../NoticeBanner/NoticeBanner';

export default function MainNav() {
	const navArr = ['client', 'manager'];
	// const [showGallery, setShowGallery] = useState(false);

	// const toggleGallery = () => {
	// 	setShowGallery(prevState => !prevState);
	// // };

	return (
		<section className='mainNav'>
			{/* MainNavBtn 컴포넌트는 navArr을 전달받아 렌더링 */}
			<div className='mainNavContainer'>
				<MainNavBtn navArr={navArr} />
			</div>
			{/* <div className='firstfollow' onClick={toggleGallery} style={{ cursor: 'pointer' }}>
				<p>노인장기요양보험이란</p>
			</div>*/}
			{/* FirstFollow 컴포넌트를 추가하고, showGallery와 toggleGallery를 전달 */}
			{/* <FirstFollow showGallery={showGallery} toggleGallery={toggleGallery} />*/}
			{/* <NoticeBanner /> */}
			<div className='FirstVisitContainer'>
				<div className='txt'>
					<h2>안전하고 편안한 노후생활 보내기</h2>
					<h3>가족과 함께, 노인장기요양보험과 함께!</h3>
				</div>
			</div>
		</section>
	);
}
