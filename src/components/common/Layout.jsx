import { useLocation } from 'react-router-dom';

export default function Layout({ title, children }) {
	const { pathname } = useLocation();
	let currentClass = '';

	// path명을 통해 레이아웃에 다른 클래스명 적용
	if (pathname === '/') currentClass = 'main';
	else currentClass = title.toLowerCase();

	return (
		<main className={currentClass}>
			{pathname !== '/' && <h1>{title}</h1>}
			<section>{children}</section>
		</main>
	);
}
