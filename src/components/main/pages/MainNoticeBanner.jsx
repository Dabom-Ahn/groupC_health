import bannerData from '../../../data/mainnoticedata';

export default function MainNoticeBanner() {
	return (
		<section className='noticeBanner'>
			<div className='noticeBanner'>
				<div className='banneritem'>
					{bannerData.map(bannerData => (
						<div key={bannerData.id} className={`banner${bannerData.id}`}>
							<img src={bannerData.imgSrc} alt={bannerData.alt} />
						</div>
					))}
				</div>
				<div className='board'>
					<img src='../../pic/sub/noticeBanner/mainfix.png' alt='게시판바로가기' className='board1' />
				</div>
			</div>
		</section>
	);
}
