import { useState } from 'react';
import IntroFirst from '../maindetail/Middle/IntroFirst.jsx';
import History from '../maindetail/Middle/History.jsx';
import IntroSecond from '../maindetail/Middle/IntroSecond.jsx';
import Youtube from '../maindetail/Middle/Youtube.jsx';

export default function Introduction() {
	const [Toggle, setToggle] = useState(false);
	const [Menus] = useState([
		{ label: '장기요양보험 소개', component: <IntroFirst /> },
		{ label: '장기요양보험이 걸어온길', component: <History /> },
		{ label: '노인재가복지시설이란?', component: <IntroSecond /> },
		{ label: '영상으로 알아보기', component: <Youtube /> }
	]);
	const [Index, setIndex] = useState(null);

	const handleTabClick = idx => {
		// 같은 버튼을 누르면 Index를 null로 설정하여 콘텐츠를 닫음
		setIndex(prevIndex => (prevIndex === idx ? null : idx));
	};

	return (
		<section className='introduction'>
			<div
				className='btnToggle'
				onClick={() => {
					setToggle(!Toggle);
					!Toggle && setIndex(null);
				}}>
				<div className='txt'>
					<h2>CLICK! 안전하고 편안한 노후생활 보내기</h2>
					<h3>가족과 함께, 노인장기요양보험과 함께!</h3>
				</div>
			</div>

			{Toggle && (
				<div className='btnTab'>
					{Menus.map((menu, idx) => (
						<button key={idx} onClick={() => handleTabClick(idx)}>
							{menu.label}
						</button>
					))}
				</div>
			)}

			{Toggle && Index !== null && (
				<div className='tabContent'>
					{Menus[Index].component} {/* 선택된 컴포넌트를 렌더링 */}
				</div>
			)}
		</section>
	);
}
