import MainNav from './MainNav';
import LastNav from './LastNav';
import Introduction from './Introduction';
import MainNoticeBanner from './MainNoticeBanner';

export default function Home() {
	return (
		<main className='main'>
			<section className='main'>
				<MainNav />
				<Introduction />
				<MainNoticeBanner />
				<LastNav />
			</section>
		</main>
	);
}
