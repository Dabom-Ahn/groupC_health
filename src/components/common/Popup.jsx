import { useState } from 'react';

export default function Popup() {
	const [fontSize, setFontSize] = useState(16);
	const [isHighContrast, setIsHighContrast] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const increaseFontSize = () => setFontSize(prevSize => prevSize + 2);
	const decreaseFontSize = () => setFontSize(prevSize => Math.max(prevSize - 2, 12));
	const toggleHighContrast = () => setIsHighContrast(prevContrast => !prevContrast);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div
			style={{
				fontSize: `${fontSize}px`,
				backgroundColor: isHighContrast ? '#000' : '#fff',
				color: isHighContrast ? '#fff' : '#000',
				padding: '20px',
				minHeight: '100vh'
			}}>
			<h1>사용자 맞춤 설정</h1>
			<p>이 페이지의 글씨 크기와 대비를 조절해보세요! 현재 글씨 크기는 {fontSize}px 입니다.</p>
			<button onClick={openModal}>설정 열기</button>

			{isModalOpen && (
				<div style={modalOverlayStyle}>
					<div style={modalContentStyle}>
						<h2>설정</h2>
						<button onClick={increaseFontSize}>글씨 키우기</button>
						<button onClick={decreaseFontSize}>글씨 줄이기</button>
						<button onClick={toggleHighContrast}>{isHighContrast ? '고대비 모드 끄기' : '고대비 모드 켜기'}</button>
						<button onClick={closeModal}>닫기</button>
					</div>
				</div>
			)}
		</div>
	);
}

// 모달 스타일
const modalOverlayStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: 1000
};

const modalContentStyle = {
	backgroundColor: '#fff',
	padding: '20px',
	borderRadius: '8px',
	width: '300px',
	textAlign: 'center',
	border: '2px solid red', // 빨간 테두리 추가
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // 그림자 효과
	animation: 'fadeIn 0.5s' // 애니메이션 효과 추가
};

// 애니메이션 효과 추가
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
	`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`,
	styleSheet.cssRules.length
);
