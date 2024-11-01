import { useState, useEffect } from 'react';
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import FooterPopup from './FooterPopup';

export default function FooterSNS() {
	const [popupWindow, setPopupWindow] = useState(null);

	const handleBannerClick = () => {
		const newWindow = window.open(
			'https://www.longtermcare.or.kr/npbs/banner_desc.jsp',
			'배너달기',
			'width=600,height=400'
		);
		setPopupWindow(newWindow);
	};

	const checkPopupClosed = () => {
		if (popupWindow && popupWindow.closed) {
			setPopupWindow(null);
		}
	};

	useEffect(() => {
		if (popupWindow) {
			const timer = setInterval(checkPopupClosed, 500);
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
				onClick={() => window.open('http://www.nhis.or.kr/helpcom_new/hc_user_main.jsp?longtermcare=Y', '_blank')}>
				온라인 상담원 원격지원
			</button>
			{popupWindow && <FooterPopup popupWindow={popupWindow} />}
		</div>
	);
}
