import privacyLogo from '../../../../pic/footericons/privacyLogo.png';
import waLogo from '../../../../pic/footericons/waLogo.png';
import ismsLogo from '../../../../pic/footericons/ismsLogo.png';
import { nhisOptions, agencyOptions } from '../../../data/footerData';
import { useRef } from 'react';

export default function FooterSite() {
	const nhisRef = useRef(null);
	const agencyRef = useRef(null);

	const handleSelectChange = url => {
		if (url) {
			window.location.href = url;
		}
	};

	return (
		<div className='footerSite'>
			<div className='footerIcons'>
				<img src={privacyLogo} alt='ePrivacy 로고' />
				<img src={waLogo} alt='웹 접근성 로고' />
				<img src={ismsLogo} alt='ISMS 로고' />
			</div>

			<div className='footerLinks'>
				<select className='footerSelect' ref={nhisRef}>
					{nhisOptions.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<button className='footerGo' onClick={() => handleSelectChange(nhisRef.current.value)}>
					이동
				</button>

				<select className='footerSelect' ref={agencyRef}>
					{agencyOptions.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<button className='footerGo' onClick={() => handleSelectChange(agencyRef.current.value)}>
					이동
				</button>
			</div>
		</div>
	);
}
