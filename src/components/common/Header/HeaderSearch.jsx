import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ColorChanger from '../ColorChanger';
import { FaHeadset, FaWrench } from 'react-icons/fa';

export default function Search() {
	const [query, setQuery] = useState(''); // 검색어 상태
	const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태
	const [isLoading, setIsLoading] = useState(false); // 로딩 상태
	const [isOpen, setIsOpen] = useState(false); // 검색 결과 창 상태

	// 검색 실행 함수
	const performSearch = async () => {
		if (query) {
			setIsLoading(true);
			setIsOpen(true); // 검색 결과 창 열기
			try {
				// Django API에 query 전달 (나중에 실제 API 주소와 연결)
				const response = await fetch(`/api/search?query=${query}`);
				const data = await response.json();
				setSearchResults(data);
			} catch (error) {
				console.error('검색 실패:', error);
				setSearchResults([]);
			} finally {
				setIsLoading(false);
			}
		} else {
			setSearchResults([]);
			setIsOpen(false); // 검색어가 없으면 창 닫기
		}
	};

	// 검색어가 변경될 때마다 자동 검색 실행
	useEffect(() => {
		if (query) {
			performSearch();
		} else {
			setIsOpen(false);
		}
	}, [query]);

	// 검색 결과 창 닫기 함수
	const closeSearchResults = () => {
		setIsOpen(false);
		setSearchResults([]);
		setQuery('');
	};

	return (
		<>
			<div className='searchForm'>
				<div className='searchFormDefault'>
					<input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='검색어 입력' />
					<button type='button' onClick={performSearch}>
						검색
					</button>
				</div>
			</div>

			<ColorChanger>
				{color => (
					<div className='headersns'>
						<Link to='https://www.longtermcare.or.kr/npbs/e/g/550/openCyberCstMain.web?menuId=npe0000000460'>
							<FaHeadset color={color} size={30} />
						</Link>
						<Link to='https://www.longtermcare.or.kr/npbs/auth/login/loginForm.web?menuId=npe0000002160&rtnUrl=&zoomSize='>
							<FaWrench color={color} size={30} />
						</Link>
					</div>
				)}
			</ColorChanger>

			{/* 검색 결과 창 */}
			{isOpen && (
				<div className='searchResultsContainer'>
					<button type='button' onClick={closeSearchResults} className='closeButton'>
						닫기
					</button>
					{isLoading ? (
						<p>검색 중...</p>
					) : searchResults.length > 0 ? (
						<ul className='searchResults'>
							{searchResults.map(result => (
								<li key={result.id}>{result.name}</li>
							))}
						</ul>
					) : (
						<p>검색 결과가 없습니다.</p>
					)}
				</div>
			)}
		</>
	);
}
