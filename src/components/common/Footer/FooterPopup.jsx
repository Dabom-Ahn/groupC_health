export default function FooterPopup() {
	const handleClose = () => {
		window.close(); // 창 닫기
	};

	return (
		<>
			<div className='footerPopup'>
				<h1>노인장기요양보험 배너달기</h1>
				<img src='../../../pic/insertbanner.jpg' alt='소스보기예시' />
			</div>
			<div className='btn_wrap'>
				<button className='btn btn_conf' onClick={handleClose}>
					닫기
				</button>
			</div>
		</>
	);
}
