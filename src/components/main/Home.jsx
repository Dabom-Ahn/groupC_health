import MainNav from './maindetail/MainNav/MainNav';
import LastNav from './maindetail/LastNav/LastNav';
import Introduction from './maindetail/Middle/Introduction';
import NoticeBanner from './maindetail/Middle/NoticeBanner';
import Youtube from './maindetail/Middle/Youtube';

export default function Home() {
	return (
		<main className='main'>
			<section className='main'>
				<MainNav />
				<NoticeBanner />
				<Introduction />
				<Youtube />
				<NoticeBanner />
				<LastNav />
			</section>
		</main>
	);
}
