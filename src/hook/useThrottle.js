import { useRef } from 'react';

export default function useThrottle(func, interval = 300) {
	const ref_timer = useRef(null);

	return () => {
		//만약 setTimeout으로 부터 반환받은 timer값이 있으면 강제 중지하면서 아래쪽의 중복 setTimeout호출 방지
		if (ref_timer.current) return;

		//setTimeout이 실행되자마자 timer에 반환값 담음
		ref_timer.current = setTimeout(() => {
			//무조건 interval시간 이후에 연결된 콜백함수 호출됨
			func();
			//콜백함수 호출시 타이머 값 제거해서 setTimeout 다시 호출할 수 있도록 처리
			ref_timer.current = null;
		}, interval);
	};
}
