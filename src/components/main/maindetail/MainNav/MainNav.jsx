import MainNavBtn from './MainNavBtn';
import ColorChanger from '../../../common/ColorChanger';
// import NoticeBanner from '../Banner/NoticeBanner';

export default function MainNav() {
	const navArr = ['client', 'manager'];

	return (
		<section className='MainNav'>
			{/* ColorChanger를 사용하여 경로에 따라 텍스트 색상 변경 */}
			<ColorChanger>
				{color => (
					<div style={{ color }}>
						<MainNavBtn navArr={navArr} />
					</div>
				)}
			</ColorChanger>
			{/* <NoticeBanner /> */}
		</section>
	);
}
