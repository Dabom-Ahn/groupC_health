import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCombineText from '../../../../hook/useCombineText';

export default function YoutubeDetail() {
	const { id } = useParams();
	const [YoutubeVid, setYoutubeVid] = useState(null);
	const combineText = useCombineText();

	useEffect(() => {
		const api_key = import.meta.env.VITE_YOUTUBE_API;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setYoutubeVid(json.items[0]);
			});
	}, [id]);

	return (
		<section className='youtubeDetail'>
			<h3 className='title'>{YoutubeVid?.snippet.title}</h3>
			<figure className='vidFrame'>
				<iframe
					width='100%'
					height='100%'
					title='youtube'
					src={`https://www.youtube.com/embed/${YoutubeVid?.snippet.resourceId.videoId}`}></iframe>
			</figure>
			<div className='textbox'>
				<p>{YoutubeVid?.snippet.description}</p>
				<span className='date'>{combineText(YoutubeVid?.snippet.publishedAt.split('T')[0], '-', '.')}</span>
			</div>
		</section>
	);
}
