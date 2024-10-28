import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LinkMenu({ linkArr, title }) {
	const [index, setIndex] = useState(null);
	const [userTitle, setUserTitle] = useState('');

	// 요소 개수를 기반으로 gap 계산
	const gapValue = linkArr.length > 1 ? `calc((100% - ${linkArr.length} * 50px) / ${linkArr.length - 1})` : '0px';

	useEffect(() => {
		const role = document.querySelector('main')?.className || '';
		setUserTitle(role);
	}, []);

	return (
		<div className='subMenuContainer' style={{ '--gap': gapValue }}>
			<div className={`${title}Menu`}>
				<div className='menuTitle'>
					<p>
						{userTitle === 'client'
							? '보호자님들이 자주찾는 메뉴'
							: userTitle === 'manager'
							? '관리자님들이 자주찾는 메뉴'
							: '자주찾는 메뉴'}
					</p>
				</div>
				{linkArr.map((el, idx) => (
					<div key={idx} className={idx === linkArr.length - 1 ? 'lastItemContainer' : 'itemContainer'}>
						<Link
							className={index === idx ? 'btnActive' : 'btn'}
							to={el.path}
							onMouseEnter={() => setIndex(idx)}
							onMouseLeave={() => setIndex(null)}>
							{el.label}
						</Link>
						{idx === linkArr.length - 1 && <div className='lastItem'></div>}
					</div>
				))}
			</div>
		</div>
	);
}
