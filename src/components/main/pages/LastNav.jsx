import { Link } from 'react-router-dom';
import lastNavData from '../../../data/lastNavData';

export default function LastNav() {
	const handleLinkClick = link => {
		if (link === '#') {
			const confirmLogin = window.confirm('로그인을 하여야 볼 수 있는 창입니다. 로그인 화면으로 이동할까요?');
			if (confirmLogin) {
				window.location.href =
					'https://www.longtermcare.or.kr/npbs/auth/login/loginForm.web?menuId=npe0000002160&rtnUrl=&zoomSize=';
			}
		}
	};

	return (
		<section className='lastNav'>
			<div className='lastNav'>
				{lastNavData.map((service, index) => (
					<div key={index} className='navSection'>
						<h2>{service.title}</h2>
						<ul>
							{service.items.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Link to={item.link} onClick={() => handleLinkClick(item.link)}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
