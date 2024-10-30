import { clientArr } from '../../../data/subpageData';
import LinkMenu from '../subdetail/LinkMenu';
import Map from '../subdetail/Map';
import NoticeBanner from '../subdetail/NoticeBanner';

export default function Client() {
	return (
		<main className='client'>
			<section className='upperclient'>
				<NoticeBanner />
			</section>
			<section className='innerclientsub'>
				<Map />
				<LinkMenu linkArr={clientArr} title='client' />
			</section>
		</main>
	);
}
