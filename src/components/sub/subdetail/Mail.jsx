import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function MailForm() {
	const ref_form = useRef(null);
	const ref_name = useRef(null);
	const ref_email = useRef(null);
	const ref_msg = useRef(null);

	//전송 이벤트 발생시 폼요소의 값을 비우기 위한 초기화 함수
	const resetForm = () => {
		[ref_name, ref_email, ref_msg].forEach(dom => (dom.current.value = ''));
	};

	//전송 버튼 클릭시 실행될 함수
	const sendForm = e => {
		e.preventDefault();

		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, ref_form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(res => {
				alert('문의내용이 관리자에 전달되었습니다.');
				console.log(res);
				resetForm();
			});
	};

	return (
		<div className='mailForm'>
			<div className='mailTitle'>
				<p>노인장기요양보험에 문의하기</p>
			</div>
			<div className='formBox'>
				{/* form에 전송 이벤트 연결 */}
				<form onSubmit={sendForm} ref={ref_form}>
					{/* 문의자이름, 메일주소 입력받는 상단 영역 */}
					<div className='upper'>
						<span>
							<label htmlFor='uName'>성함</label>
							<input ref={ref_name} name='user_name' type='text' id='uName' placeholder='보내는 분의 성함을 써주세요' />
						</span>
						<span>
							<label htmlFor='uMail'>이메일</label>
							<input
								ref={ref_email}
								name='user_email'
								type='text'
								id='uMail'
								placeholder='연락받으실 이메일을 써주세요'
							/>
						</span>
					</div>

					{/* 문의내용 입력받는 textarea 하단 영역 */}
					<div className='lower'>
						<span>
							<label htmlFor='msg'>문의내용</label>
							<textarea ref={ref_msg} name='message' id='msg' placeholder='문의내용을 써주세요'></textarea>
						</span>
					</div>

					{/* 전송,취소 버튼 그룹 */}
					<nav className='btnSet'>
						<input type='reset' value='다시쓰기' />
						<input type='submit' value='보내기' />
					</nav>
				</form>
			</div>
		</div>
	);
}
