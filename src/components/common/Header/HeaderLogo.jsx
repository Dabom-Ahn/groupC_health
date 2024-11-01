import { Link } from 'react-router-dom';
import hwellLogo from '/pic/logo/logo_2.png';
import LTCLogo from '/pic/logo/logo_1.png';

export default function LogoLink() {
	return (
		<div className='logo'>
			<Link to={'/'}>
				<img className='logo2' src={hwellLogo} alt='국민건강보험 로고' />
				<img className='logo1' src={LTCLogo} alt='노인장기요양보험 로고' />
			</Link>
		</div>
	);
}
