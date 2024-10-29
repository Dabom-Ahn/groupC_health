import { Link } from 'react-router-dom';
import { useYoutubeQuery } from '../../../../hook/useYoutube';
import useShortenText from '../../../../hook/useShortenText';
import useCombineText from '../../../../hook/useCombineText';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();

	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });

	return (
		<section className='youtube'>
			{isPending && <p>Loading...</p>}
			<div className='youtubecontainer'>
				{Vids?.map((vid, idx) => {
					return (
						<article key={idx}>
							<h3>
								<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 60)}</Link>
							</h3>
							<div className='txt'>
								<p>{shortenText(vid.snippet.description, 150)}</p>
								<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
							</div>
							<img className={`thumb${idx}`} src={vid.snippet.thumbnails.high.url} />
						</article>
					);
				})}
			</div>
		</section>
	);
}
