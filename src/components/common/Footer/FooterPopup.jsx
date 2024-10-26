import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import bannerImage from '../../../../pic/footericons/insertbanner.jpg';

export default function FooterPopup({ popupWindow }) {
	useEffect(() => {
		if (!popupWindow) return;

		// 팝업 창의 문서에 컴포넌트를 렌더링
		const popupDoc = popupWindow.document;
		const container = popupDoc.createElement('div');
		popupDoc.body.appendChild(container);

		ReactDOM.createPortal(
			<>
				<div className='footerPopup'>
					<h1>노인장기요양보험 배너달기</h1>
					<img src={bannerImage} alt='소스보기예시' />
				</div>
				<div className='btn_wrap'>
					<button className='btn btn_conf' onClick={() => popupWindow.close()}>
						닫기
					</button>
				</div>
			</>,
			container
		);

		// 컴포넌트 언마운트 시 정리
		return () => {
			container.remove();
			if (!popupWindow.closed) {
				popupWindow.close();
			}
		};
	}, [popupWindow]);

	return null;
}
