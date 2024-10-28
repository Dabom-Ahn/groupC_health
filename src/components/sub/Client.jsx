import { Link } from 'react-router-dom';
import { clientArr } from '../../data/subpageData';
import LinkMenu from './subdetail/LinkMenu';
import Map from './subdetail/Map';
// import NoticeBanner from './subdetail/NoticeBanner';

export default function Client() {
	return (
		<main className='client'>
			<section className='client'>
				{/* <NoticeBanner /> */}
				<div className='loginBanner'>
					<Link className='Login' to='/login'>
						로그인/회원가입바로가기
					</Link>
				</div>
				<Map />
				<LinkMenu linkArr={clientArr} title='client' />
			</section>
		</main>
	);
}
