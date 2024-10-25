import Home from './components/main/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Manager from './components/sub/Manager';
import Client from './components/sub/Client';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/client' element={<Client />} />
				<Route path='/manager' element={<Manager />} />
			</Routes>
			<Footer />
		</>
	);
}
