import { useEffect, useState } from 'react';
import { noticeBannerClient, noticeBannerManager } from '../../../data/noticeBannerdata';

export default function NoticeBanner() {
	const [posts, setPosts] = useState([]);
	const [userRole, setUserRole] = useState(''); // 사용자 역할 상태 추가

	// 컴포넌트가 마운트될 때 현재 경로에 따라 데이터를 설정합니다.
	useEffect(() => {
		const path = window.location.pathname;
		if (path.includes('/client')) {
			setPosts(noticeBannerClient);
		} else if (path.includes('/manager')) {
			setPosts(noticeBannerManager);
		}
	}, []);

	// 사용자 역할 설정 (예시로 'client'나 'manager' 값을 가져오는 로직을 추가할 수 있음)
	useEffect(() => {
		const role = document.querySelector('main')?.className || '';
		setUserRole(role);
	}, []);

	return (
		<div className='NoticeBanner'>
			<div className='greeting'>
				<p>
					{userRole === 'client'
						? '보호자님, 중요 공지내용을 확인해보세요'
						: userRole === 'manager'
						? '관리자님, 중요 공지내용을 확인해보세요'
						: '공지내용을 확인해보세요'}
				</p>
			</div>
			<div className='bannerItemContainer'>
				{posts.map((post, idx) => (
					<div key={idx} className='bannerItem'>
						{/* <img src={post.img} alt={`Banner ${idx + 1}`} /> */}
						<p className='noticeContents'>{post.contents}</p>
						{/* <a href={post.link} target='_blank' rel='noopener noreferrer'>
							자세히 보기
						</a> */}
					</div>
				))}
			</div>
		</div>
	);
}
