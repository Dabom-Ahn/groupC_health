import { useState, useEffect } from 'react';

export default function BackgroundChanger({ colorKey }) {
	const colorMap = {
		client: '#fd0059',
		manager: '#01d556'
	};
	const newColor = colorMap[colorKey] || '#fff';

	const [backgroundColor, setBackgroundColor] = useState('#fff');
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		if (newColor !== backgroundColor) {
			setBackgroundColor(newColor);
			setIsTransitioning(true);

			setTimeout(() => setIsTransitioning(false), 500);
		}
	}, [colorKey]);

	// backgroundColor가 변경될 때마다 body 배경색 설정
	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor;
		return () => {
			document.body.style.backgroundColor = '#fff'; // 언마운트 시 기본 색상으로 복원
		};
	}, [backgroundColor]);

	return (
		<div
			className={`backgroundchanger${isTransitioning ? 'transition' : ''}`}
			style={{
				backgroundColor,
				transition: 'background-color 0.5s linear'
			}}
		/>
	);
}
