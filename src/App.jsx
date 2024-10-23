import Home from './components/main/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Manager from './components/sub/Manager';
import Client from './components/sub/Client';
import Info from './components/sub/Info';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/manager' element={<Manager />} />
				<Route path='/client' element={<Client />} />
				<Route path='/info' element={<Info />} />
			</Routes>
			<Footer />
		</>
	);
}
