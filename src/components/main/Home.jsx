import MainNav from './maindetail/MainNav/MainNav';
import LastNav from './maindetail/LastNav/LastNav';

export default function Home() {
	return (
		<main className='main'>
			<section className='main'>
				<MainNav />
				<LastNav />
			</section>
		</main>
	);
}
