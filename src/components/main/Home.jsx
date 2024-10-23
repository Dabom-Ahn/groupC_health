import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import GnbBtn from './GnbBtn';

export default function Home() {
	const gnbArr = ['client', 'manager', 'info'];
	const [backgroundColor, setBackgroundColor] = useState('#fff'); // 기본 배경색 설정
	const [isTransitioning, setIsTransitioning] = useState(false); // 배경 전환 중인지 상태 관리

	// 클릭 시 배경색 변경 및 애니메이션 후 페이지 이동
	const handleClick = data => {
		// 각 버튼에 맞는 배경색 설정
		let newColor;
		if (data === 'client') {
			newColor = '#fd0059';
		} else if (data === 'manager') {
			newColor = '#01d556';
		} else if (data === 'info') {
			newColor = '#595959';
		}

		// 배경색을 변경하고 애니메이션 효과 실행
		setBackgroundColor(newColor);
		setIsTransitioning(true);

		// 0.5초 뒤 애니메이션 종료
		setTimeout(() => {
			setIsTransitioning(false);
		}, 500);
	};

	// backgroundColor가 변경될 때마다 body 배경색 변경
	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor;
	}, [backgroundColor]); // backgroundColor가 변경될 때 실행

	return (
		<Layout title={'HOME'}>
			<div
				className={`main-container ${isTransitioning ? 'transition' : ''}`}
				style={{
					transition: 'background-color 0.5s linear'
				}}>
				<GnbBtn gnbArr={gnbArr} onClick={handleClick} />
				<Banner />
			</div>
		</Layout>
	);
}
