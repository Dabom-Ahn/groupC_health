import { useNavigate } from 'react-router-dom';

export default function NavEffect({ data, idx, isActive, onClick, selectedButton, moveOut }) {
	const navigate = useNavigate();

	const navArrKor = {
		client: '보호자',
		manager: '관리자'
	};

	// 클릭 이벤트 핸들러
	const handleClick = () => {
		onClick(data, idx);
		setTimeout(() => navigate('/' + data), 500);
	};

	// 버튼 이동 스타일 반환
	const getMoveOutStyle = () => {
		if (moveOut === idx) {
			switch (data) {
				case 'client':
					return 'translateX(-100vw)';
				case 'manager':
					return 'translateX(100vw)';
				default:
					return 'translateX(0)';
			}
		}
		return 'translateX(0)';
	};

	const opacityStyle = selectedButton === null || selectedButton === idx ? 1 : 0;
	const moveOutStyle = getMoveOutStyle();

	return (
		<div
			className={`navitem${data} ${isActive}`}
			onClick={handleClick}
			style={{
				opacity: opacityStyle,
				transition: 'opacity 0.2s, transform 1s ease',
				transform: moveOutStyle,
				cursor: 'pointer'
			}}>
			<h3>{navArrKor[data] || data}</h3>
			<img src={`pic/mainnav/${data}.png`} alt={`${navArrKor[data] || data} 이미지`} />
		</div>
	);
}
