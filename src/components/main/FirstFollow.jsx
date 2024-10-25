import { useEffect } from 'react';
import LinkMenu from './LinkMenu';
import { loginArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Login() {
	useEffect(() => {
		// 컴포넌트가 마운트될 때 body 스타일을 변경
		document.body.style.backgroundColor = '#000000';

		// 컴포넌트가 언마운트될 때 원래 배경색으로 복구
		return () => {
			document.body.style.backgroundColor = '';
		};
	}, []);

	return (
		<>
			<section className='loginBody'>
				<div className='subtitle'>로그인정보</div>
				<div className='space'></div>
				<div className='detaillist'>
					<LinkMenu linkArr={loginArr} />
				</div>
			</section>
			<Banner />
		</>
	);
}
