import { useState, useEffect } from 'react';
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import FooterPopup from './FooterPopup';

export default function FooterSNS() {
	const [popupWindow, setPopupWindow] = useState(null);

	const handleBannerClick = () => {
		const newWindow = window.open('', '배너달기', 'width=600,height=400');
		setPopupWindow(newWindow);
	};

	// 팝업창 닫힐 때 상태 초기화
	useEffect(() => {
		if (popupWindow) {
			const timer = setInterval(() => {
				if (popupWindow.closed) {
					setPopupWindow(null);
				}
			}, 500);
			return () => clearInterval(timer);
		}
	}, [popupWindow]);

	return (
		<div className='footerSNS'>
			<a className='sns1' href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
				<FaFacebookSquare />
			</a>
			<a className='sns2' href='http://twitter.com' target='_blank' rel='noopener noreferrer'>
				<FaTwitterSquare />
			</a>
			<button className='footerButton' onClick={handleBannerClick}>
				배너달기
			</button>
			<button
				className='footerButton'
				onClick={() => (window.location.href = 'http://www.nhis.or.kr/helpcom_new/hc_user_main.jsp?longtermcare=Y')}>
				온라인 상담원 원격지원
			</button>
			{popupWindow && <FooterPopup popupWindow={popupWindow} />}
		</div>
	);
}
