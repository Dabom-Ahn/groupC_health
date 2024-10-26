import { useState } from 'react';
import FirstVisit from './FirstVisit';

export default function FirstFollow() {
	const [showFirstVisit, setShowFirstVisit] = useState(false);

	const handleClick = () => {
		setShowFirstVisit(prevState => !prevState); // 클릭 시 상태를 반전시켜서 토글
	};

	return (
		<div className='firstfollow'>
			<p>CLICK!</p>
			<div className='followBanner' onClick={handleClick}>
				<p>노인장기요양보험이란</p>
			</div>
			{showFirstVisit && <FirstVisit />} {/* 상태에 따라 FirstVisit 렌더링 */}
		</div>
	);
}
