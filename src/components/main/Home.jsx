import MainNav from './maindetail/MainNav/MainNav';
import FirstFollow from './maindetail/FirstVisit/FirstFollow';
import LastNav from './maindetail/LastNav/LastNav';

export default function Home() {
	return (
		<main>
			<MainNav />
			<FirstFollow />
			<LastNav />
		</main>
	);
}
