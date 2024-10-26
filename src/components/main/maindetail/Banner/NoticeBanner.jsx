import { useEffect, useState } from 'react';

export default function NoticeBanner() {
	const [posts, setPosts] = useState([]);

	// Django API 호출하여 데이터 가져오기
	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/banner-posts/') // Django API URL
			.then(response => response.json())
			.then(data => {
				setPosts(data);
			})
			.catch(error => console.error('Error fetching banner posts:', error));
	}, []);

	return (
		<div className='NoticeBanner'>
			{posts.length > 0 ? (
				posts.map((post, idx) => (
					<div key={idx} className='banner-item'>
						<img src={post.image} alt={`Banner ${idx + 1}`} />
						<h3>{post.title}</h3>
						<a href={post.link} target='_blank' rel='noopener noreferrer'>
							More info
						</a>
					</div>
				))
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
}
