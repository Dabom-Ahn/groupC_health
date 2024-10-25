import Home from './components/main/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Manager from './components/sub/Manager';
import Client from './components/sub/Client';
import Info from './components/sub/Info';
import Login from './components/sub/Login';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/clientlogin' element={<ClientLogin />} />
				<Route path='/managerlogin' element={<ManagerLogin />} />
				<Route path='/managerwithoutlogin' element={<ManagerWithoutLogin />} />
				<Route path='/firstfollow' element={<FirstFollow />} />
			</Routes>
			<Footer />
		</>
	);
}
