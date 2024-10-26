import { Link } from 'react-router-dom';
import { clientArr } from '../../data/subpageData';
import LinkMenu from './subdetail/LinkMenu';
import Notice from './subdetail/Notice';
import Map from './subdetail/Map';

export default function Client() {
	return (
		<>
			<Notice />
			<Link className='Login' to='/login'>
				로그인/회원가입바로가기
			</Link>
			<Map />
			<LinkMenu linkArr={clientArr} title='client' />
		</>
	);
}
