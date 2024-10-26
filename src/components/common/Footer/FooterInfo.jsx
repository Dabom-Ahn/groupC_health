import hwellLogo from '../../../pic/logo/logo_2.png';

export default function FooterInfo() {
	return (
		<div className='footerInfo'>
			<div className='footerLogo'>
				<h1>
					<img src={hwellLogo} alt='국민건강보험 로고' />
				</h1>
			</div>
			<div className='footerTxt'>
				<p className='txt1'>주소 : 26464 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
				<p className='txt2'>
					국민건강보험공단 고객센터 : 1577-1000 (발신자 부담), 기관청구 상담 : 033-811-2002
					<br />
					업무시간 : 09시 ~ 18시(월~금)
				</p>
				<p className='txt3'>
					COPYRIGHT© 2024 BY ALPACO GroupC ALL RIGHTS RESERVED.
					<br />
					WEBMASTER@NHIS.OR.KR
					<br />
					This site for study purpose, not for commercial.
				</p>
			</div>
		</div>
	);
}
