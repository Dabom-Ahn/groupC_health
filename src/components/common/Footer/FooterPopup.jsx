import { useEffect } from 'react';
import bannerImage from '../../../../pic/footericons/insertbanner.jpg';

export default function FooterPopup({ popupWindow }) {
	useEffect(() => {
		if (!popupWindow) return;

		const popupDoc = popupWindow.document;

		// 팝업 창에 직접 HTML 요소를 추가하여 렌더링
		popupDoc.body.innerHTML = `
      <div class='footerPopup'>
        <h1>노인장기요양보험 배너달기</h1>
        <img src="${bannerImage}" alt='소스보기예시' />
      </div>
      <div class='btn_wrap'>
        <button id='closeBtn' class='btn btn_conf'>닫기</button>
      </div>
    `;

		// 닫기 버튼에 대한 이벤트 리스너 추가
		const closeBtn = popupDoc.getElementById('closeBtn');
		closeBtn.addEventListener('click', () => {
			popupWindow.close();
		});

		// 컴포넌트가 언마운트될 때 정리
		return () => {
			if (!popupWindow.closed) {
				popupWindow.close();
			}
		};
	}, [popupWindow]);

	return null;
}
