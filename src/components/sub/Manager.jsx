import { Link } from 'react-router-dom';
import { infoArr } from '../../data/subpageData';
import LinkMenu from './subdetail/LinkMenu';
// import NoticeBanner from './subdetail/NoticeBanner';

export default function Manager() {
	return (
		<main className='manager'>
			{/* <NoticeBanner /> */}
			<section>
				<Link className='Login' to='/login'>
					로그인/회원가입바로가기
				</Link>
				<LinkMenu linkArr={infoArr} title='manager' />
			</section>
		</main>
	);
}
