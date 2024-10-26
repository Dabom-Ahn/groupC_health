import FooterInfo from './FooterInfo';
import FooterSNS from './FooterSNS';
import FooterSite from './FooterSite';

export default function Footer() {
	return (
		<footer className='footer'>
			<FooterInfo />
			<FooterSNS />
			<FooterSite />
		</footer>
	);
}
