import MainNavBtn from '../maindetail/MainNav/MainNavBtn';

export default function MainNav() {
	const navArr = ['client', 'manager'];

	return (
		<section className='mainNav'>
			<div className='mainNavContainer'>
				<MainNavBtn navArr={navArr} />
			</div>
		</section>
	);
}
