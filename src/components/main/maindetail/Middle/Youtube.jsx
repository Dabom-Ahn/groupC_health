import { Link } from 'react-router-dom';
import { useYoutubeQuery } from '../../../../hook/useYoutube';
import useShortenText from '../../../../hook/useShortenText';
// import useCombineText from '../../../../hook/useCombineText';

export default function Youtube() {
	const shortenText = useShortenText();
	const { data: Vids, isPending } = useYoutubeQuery({ type: 'A' });

	return (
		<section className='youtube'>
			<div className='youtubecontainer'>
				<div className='title'>
					<h2>장기요양보험이 더 궁금하다면?</h2>
				</div>
				<div className='contentbox'>
					{isPending && <p>Loading...</p>}
					{Vids?.map((vid, idx) => {
						return (
							<div className='content' key={idx}>
								<div className='youtubetitle'>
									<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 60)}</Link>
								</div>
								{/* <div className='txt'>
									<p>{shortenText(vid.snippet.description, 40)}</p>
									<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
								</div> */}
								<img className={`thumb${idx}`} src={vid.snippet.thumbnails.high.url} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
