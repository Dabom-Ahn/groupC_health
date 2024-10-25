import { useEffect } from 'react';
import LinkMenu from './LinkMenu';
import { managerArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Manager() {
	useEffect(() => {
		document.body.style.backgroundColor = '#01d556';
		return () => {
			document.body.style.backgroundColor = '#fff';
		};
	}, []);

	return (
		<>
			<section className='managerBody'>
				<h1 className='subtitle'>기관관리자</h1>
				<div className='detaillist'>
					<LinkMenu linkArr={managerArr} />
				</div>
			</section>
			<Banner />
		</>
	);
}
