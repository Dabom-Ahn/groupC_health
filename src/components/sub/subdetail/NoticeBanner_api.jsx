import { useEffect, useState } from 'react';

export default function NoticeBanner() {
	const [posts, setPosts] = useState([]);
	const [userRole, setUserRole] = useState(''); // 사용자 역할 상태 추가

	// Django API 호출하여 데이터 가져오기
	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/banner-posts/') // Django API URL
			.then(response => response.json())
			.then(data => {
				setPosts(data);
			})
			.catch(error => console.error('Error fetching banner posts:', error));
	}, []);

	// 사용자 역할 설정 (예시로 'client'나 'manager' 값을 가져오는 로직을 추가할 수 있음)
	useEffect(() => {
		// 예시로 사용자의 역할을 설정
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
			{posts.length > 0 ? (
				posts.map((post, idx) => (
					<div key={idx} className='bannerItem'>
						<img src={post.image_url} alt={`Banner ${idx + 1}`} />
						<p className='noticeTitle'>{post.title}</p>
						<a href={post.link} target='_blank' rel='noopener noreferrer'></a>
					</div>
				))
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
}
