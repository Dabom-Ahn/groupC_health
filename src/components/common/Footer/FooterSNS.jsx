import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

export default function FooterSNS() {
	const handleBannerClick = () => {
		window.open('/FooterPopup', '배너달기', 'width=600,height=400');
	};

	const handleSupportClick = () => {
		window.location.href = 'http://www.nhis.or.kr/helpcom_new/hc_user_main.jsp?longtermcare=Y';
	};

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
			<button className='footerButton' onClick={handleSupportClick}>
				온라인 상담원 원격지원
			</button>
		</div>
	);
}
