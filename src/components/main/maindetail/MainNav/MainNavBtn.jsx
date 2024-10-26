import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import NavEffect from './NavEffect';

export default function MainNavBtn({ navArr, onClick }) {
	const { pathname } = useLocation();
	const [selectedButton, setSelectedButton] = useState(null);
	const [moveOut, setMoveOut] = useState(null);

	// 클릭 이벤트 핸들러
	const handleClick = (data, idx) => {
		setSelectedButton(idx);
		setMoveOut(idx);
		onClick?.(data); // onClick이 정의되었을 경우 호출
	};

	return (
		<div className='MainNavBtn'>
			{navArr.map((data, idx) => {
				const isActive = pathname === '/' + data ? 'on' : '';
				return (
					<NavEffect
						key={idx}
						data={data}
						idx={idx}
						isActive={isActive}
						onClick={handleClick}
						selectedButton={selectedButton}
						moveOut={moveOut}
					/>
				);
			})}
		</div>
	);
}
