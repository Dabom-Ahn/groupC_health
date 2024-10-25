import Layout from '../common/Layout';
import FirstFollow from './maindetail/FirstVisit/FirstFollow';
import LastNav from './maindetail/LastNav/LastNav';
import MainNav from './maindetail/MainNav/MainNav';

export default function Home() {
	return (
		<Layout title={'HOME'}>
			<MainNav />
			<FirstFollow />
			<LastNav />
		</Layout>
	);
}
