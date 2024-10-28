import { infoArr } from '../../data/subpageData';
import LinkMenu from './subdetail/LinkMenu';
import NoticeBanner from './subdetail/NoticeBanner';
import Mail from './subdetail/Mail';

export default function Manager() {
	return (
		<main className='manager'>
			<section className='uppermanager'>
				<NoticeBanner />
			</section>
			<section className='innermanagersub'>
				<Mail />
				<LinkMenu linkArr={infoArr} title='manager' />
			</section>
		</main>
	);
}
