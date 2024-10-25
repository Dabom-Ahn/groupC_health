import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
	const { pathname } = useLocation();
	const [query, setQuery] = useState(''); // 검색어 상태
	const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태
	const [isLoading, setIsLoading] = useState(false); // 로딩 상태

	// 더미 데이터
	const dummyData = [
		{ id: 1, name: '노인장기요양보험 서비스' },
		{ id: 2, name: '국민건강보험 서비스' },
		{ id: 3, name: '의료 보험 혜택' },
		{ id: 4, name: '보험 청구 절차' },
		{ id: 5, name: '노후 복지 서비스' }
	];

	// 검색 실행 함수
	const performSearch = () => {
		if (query) {
			setIsLoading(true);

			// 0.5초 후 더미 데이터를 통해 검색 결과 필터링
			setTimeout(() => {
				const filteredResults = dummyData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
				setSearchResults(filteredResults);
				setIsLoading(false);
			}, 500);
		} else {
			setSearchResults([]); // 검색어가 없으면 결과 초기화
		}
	};

	// 검색어가 변경될 때마다 검색 실행 (자동 검색)
	useEffect(() => {
		performSearch();
	}, [query]);

	return (
		<>
			<header className={`header ${pathname === '/' ? 'main' : ''}`}>
				<Link to={'/'}>
					<img className='logo2' src='pic/logo_2.png' alt='국민건강보험 로고' />
					<img className='logo1' src='pic/logo_1.png' alt='노인장기요양보험 로고' />
				</Link>

				{/* 검색창 구현 */}
				<div className='search-form'>
					<input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='검색어 입력' />
					<button type='button' onClick={performSearch}>
						검색
					</button>{' '}
					{/* 검색 버튼 추가 */}
					{/* 검색 결과가 있을 때 아래로 내려가는 구조 */}
					{isLoading ? (
						<p>검색 중...</p>
					) : (
						searchResults.length > 0 && (
							<ul className='search-results'>
								{searchResults.map(result => (
									<li key={result.id}>{result.name}</li>
								))}
							</ul>
						)
					)}
				</div>
			</header>
		</>
	);
}
