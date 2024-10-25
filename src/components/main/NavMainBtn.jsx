import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function GnbBtn({ gnbArr, onClick }) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼 저장
	const [moveOut, setMoveOut] = useState(null); // 클릭된 버튼이 이동하는 상태

	const gnbArrKor = data => {
		if (data === 'client') {
			return '보호자(개인)';
		} else if (data === 'manager') {
			return '관리자';
		} else if (data === 'info') {
			return '기타정보';
		} else if (data === 'login') {
			return '로그인정보';
		}
		return data; // 매칭되지 않는 경우 원래 데이터를 반환
	};

	// 클릭 시 페이지 이동 및 버튼 투명도 설정
	const handleClick = (data, idx) => {
		setSelectedButton(idx); // 선택된 버튼의 인덱스 저장
		setMoveOut(idx); // 클릭된 버튼이 이동하도록 설정
		onClick(data); // 부모로부터 받은 클릭 핸들러 호출

		setTimeout(() => {
			navigate('/' + data); // 0.5초 뒤 페이지 이동
		}, 500); // 페이지 이동
	};

	// data에 따라 움직이는 방향을 설정하는 함수
	const getMoveOutStyle = (data, idx) => {
		if (moveOut === idx) {
			if (data === 'client') {
				return 'translateX(-100vw)'; // 왼쪽으로 이동
			} else if (data === 'manager') {
				return 'translateX(100vw)'; // 오른쪽으로 이동
			} else if (data === 'info') {
				return 'translateY(-100vh)'; // 위로 이동
			} else if (data === 'login') {
				return 'translateY(100vh)'; // 아래로 이동
			}
		}
		return 'translateX(0)'; // 기본 상태 (이동 없음)
	};

	return (
		<div className='gnb'>
			{gnbArr.map((data, idx) => {
				const isActive = pathname === '/' + data ? 'on' : '';
				// 선택된 버튼이 없을 때는 모든 div의 opacity가 1, 선택된 div가 있을 때는 해당 div만 opacity 1
				const opacityStyle = selectedButton === null || selectedButton === idx ? 1 : 0;
				const moveOutStyle = getMoveOutStyle(data, idx); // 각 data에 따라 이동 방향 설정

				return (
					<div key={idx} className='gnb-button-wrapper'>
						<div
							className={`gnbitem${data} ${isActive}`}
							onClick={() => handleClick(data, idx)}
							style={{
								opacity: opacityStyle,
								transition: 'opacity 0.2s, transform 1s ease',
								transform: moveOutStyle,
								cursor: 'pointer' // div를 클릭 가능하게 설정
							}}>
							<h3>{gnbArrKor(data)}</h3>
							<img src={`/images/${data}.png`} alt={`${gnbArrKor(data)} 이미지`} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
