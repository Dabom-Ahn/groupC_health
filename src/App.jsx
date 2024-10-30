import React from 'react';
import Home from './components/main/pages/Home';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Manager from './components/sub/pages/Manager';
import Client from './components/sub/pages/Client';
import YoutubeDetail from './components/main/maindetail/Middle/YoutubeDetail';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 생성
const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/client' element={<Client />} />
				<Route path='/manager' element={<Manager />} />
				<Route path='/youtube/:id' element={<YoutubeDetail />} />
			</Routes>
			<Footer />
		</QueryClientProvider>
	);
}
