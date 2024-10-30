import { useEffect, useState } from 'react';

export default function NoticeBanner() {
	const [posts, setPosts] = useState([]);
	const [userRole, setUserRole] = useState('');

	useEffect(() => {
		const path = window.location.pathname;
		let category = '';

		if (path.includes('/client')) {
			category = 'client';
		} else if (path.includes('/manager')) {
			category = 'manager';
		}

		if (category) {
			fetch(`http://127.0.0.1:8000/api/posts/?category=${category}`)
				.then(response => response.json())
				.then(data => setPosts(data))
				.catch(error => console.error('Error fetching posts:', error));
		}
	}, []);

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
						<p className='noticeTitle'>{post.title}</p>
						<p className='noticeContents'>{post.body.length > 10 ? `${post.body.substring(0, 100)}...` : post.body}</p>
						{post.link && (
							<a href={post.link} target='_blank' rel='noopener noreferrer'>
								자세히 보기
							</a>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
