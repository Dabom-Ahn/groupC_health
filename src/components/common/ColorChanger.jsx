import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ColorChanger({ children, applyToBackground = '#fff', applyToTxt = '#000' }) {
	const location = useLocation();
	const [color, setColor] = useState('#000'); // 기본 색상은 검정색

	// 경로에 따라 텍스트 색상 변경
	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setColor('#000000'); // 홈 경로일 때 흰색
				break;
			case '/client':
				setColor('#FF0000'); // 보호자일 때 빨강색
				break;
			case '/manager':
				setColor('#00FF00'); // 관리자일 때 초록색
				break;
			default:
				setColor('#000000'); // 기본 색상 (검정색)
		}
	}, [location.pathname]);

	// 배경색 변경 (주석 처리)
	/*
	useEffect(() => {
		if (applyToBackground) {
			document.body.style.backgroundColor = color;
			return () => {
				document.body.style.backgroundColor = applyToBackground; // 언마운트 시 기본 값으로 복원
			};
		}
	}, [color, applyToBackground]);
	*/

	// 텍스트 색상 변경
	useEffect(() => {
		if (applyToTxt) {
			document.body.style.color = color;
			return () => {
				document.body.style.color = applyToTxt; // 언마운트 시 기본 값으로 복원
			};
		}
	}, [color, applyToTxt]);

	// children 함수에 color를 전달
	return children(color);
}
