import FooterInfo from './FooterInfo';
import FooterSNS from './FooterSNS';
import FooterSite from './FooterSite';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='upperfooter'>
				<FooterInfo />
				<FooterSNS />
			</div>
			<FooterSite />
		</footer>
	);
}
