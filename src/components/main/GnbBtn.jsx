import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function GnbBtn({ gnbArr, onClick }) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼 저장

	// 클릭 시 페이지 이동 및 버튼 투명도 설정
	const handleClick = (data, idx) => {
		setSelectedButton(idx); // 선택된 버튼의 인덱스 저장
		onClick(data); // 부모로부터 받은 클릭 핸들러 호출

		setTimeout(() => {
			navigate('/' + data); // 0.5초 뒤 페이지 이동
		}, 500); // 페이지 이동
	};

	return (
		<div className='gnb'>
			{gnbArr.map((data, idx) => {
				const isActive = pathname === '/' + data ? 'on' : '';
				// 선택된 버튼이 없을 때는 모든 버튼의 opacity가 1, 선택된 버튼이 있을 때는 해당 버튼만 opacity 1
				const opacityStyle = selectedButton === null || selectedButton === idx ? 1 : 0;
				return (
					<div key={idx} className='gnb-button-wrapper'>
						{' '}
						<button
							className={`gnbitem${data} ${isActive}`}
							onClick={() => handleClick(data, idx)}
							style={{ opacity: opacityStyle, transition: 'opacity 0.12s' }} // 투명도 및 트랜지션
						>
							{data.toUpperCase()}
						</button>
					</div>
				);
			})}
		</div>
	);
}
