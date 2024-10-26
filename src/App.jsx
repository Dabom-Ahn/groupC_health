import Home from './components/main/Home';
// import Popup from './components/common/Popup';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
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
				{/* <Route path='/popup' element={<Popup />} />/ */}
			</Routes>
			<Footer />
		</>
	);
}
