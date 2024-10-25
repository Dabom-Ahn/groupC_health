import { useEffect } from 'react';
import LinkMenu from './subdetail/LinkMenu';
import { clientArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Client() {
	useEffect(() => {
		// 컴포넌트가 마운트될 때 body 스타일을 변경
		document.body.style.backgroundColor = '#fd0059';

		// 컴포넌트가 언마운트될 때 원래 배경색으로 복구
		return () => {
			document.body.style.backgroundColor = '';
		};
	}, []);

	return (
		<>
			<section className='clientBody'>
				<div className='subtitle'>보호자</div>
				<div className='space'></div>
				<div className='detaillist'>
					<LinkMenu linkArr={clientArr} />
				</div>
			</section>
			<Banner />
		</>
	);
}
