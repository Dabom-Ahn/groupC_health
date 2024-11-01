import bannerData from '../../../data/mainnoticedata';
import { Link } from 'react-router-dom';

export default function MainNoticeBanner() {
	return (
		<section className='noticeBanner'>
			<div className='noticeBanner'>
				<div className='banneritem'>
					{bannerData.map(banner => (
						<div key={banner.id} className={`banner${banner.id}`}>
							<Link to={banner.link} className='board1'>
								<img src={banner.imgSrc} alt={banner.alt} />
							</Link>
						</div>
					))}
				</div>
				<div className='board'>
					<Link to='https://www.nhis.or.kr/nhis/policy/wbhadd04300m01.do' className='board1'>
						<img src='/pic/sub/noticeBanner/mainfix.png' alt='게시판 바로가기' />
					</Link>
				</div>
			</div>
		</section>
	);
}
