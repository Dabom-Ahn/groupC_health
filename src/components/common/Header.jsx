import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const { pathname } = useLocation();

	return (
		<>
			<header className={`header ${pathname === '/' ? 'main' : ''}`}>
				<Link to={'/'}>
					<img className='logo2' src='pic/logo_2.png' alt='국민건강보험 로고' />
					<img className='logo1' src='pic/logo_1.png' alt='노인장기요양보험 로고' />
				</Link>

				<form className='search-form' action='https://www.longtermcare.or.kr/npbs/search.jsp' method='get'>
					<input type='text' name='query' placeholder='검색어 입력' />
					<button type='submit'>검색</button>
				</form>
			</header>
		</>
	);
}
