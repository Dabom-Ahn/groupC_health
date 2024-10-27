import { useEffect, useRef, useState, useCallback } from 'react';
import useThrottle from '../../hooks/useThrottle';

export default function Map() {
	const { kakao } = window;

	const [Index, setIndex] = useState(0);
	const [Traffic, setTraffic] = useState(false);
	const [Roadview, setRoadview] = useState(false);

	const ref_info = useRef([
		{
			title: '죽헌 미르데이센터(강동1호)',
			latlng: new kakao.maps.LatLng(37.558105, 127.079071),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerOffset: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: '더사랑재가복지센터',
			latlng: new kakao.maps.LatLng(37.536837, 127.122423),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: '	한가족 데이케어센터',
			latlng: new kakao.maps.LatLng(37.665777, 127.035597),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		}
	]);
	const { latlng, markerImg, markerSize, markerPos } = ref_info.current[Index];
	const ref_instClient = useRef(new kakao.maps.RoadviewClient());
	const ref_instType = useRef(new kakao.maps.MapTypeControl());
	const ref_instZoom = useRef(new kakao.maps.ZoomControl());
	const ref_mapFrame = useRef(null);
	const ref_viewFrame = useRef(null);
	const ref_instMap = useRef(null);
	const ref_instMarker = useRef(null);
	const ref_instView = useRef(null);

	const createMap = useCallback(() => {
		ref_mapFrame.current.innerHTML = '';
		ref_instMap.current = new kakao.maps.Map(ref_mapFrame.current, { center: latlng });
		ref_instMarker.current = new kakao.maps.Marker({
			position: latlng,
			image: new kakao.maps.MarkerImage(markerImg, markerSize, markerPos)
		});
		ref_instView.current = new kakao.maps.Roadview(ref_viewFrame.current);
		ref_instMarker.current.setMap(ref_instMap.current);
		[ref_instType.current, ref_instZoom.current].forEach(inst => ref_instMap.current.addControl(inst));
		ref_instClient.current.getNearestPanoId(latlng, 50, panoId => ref_instView.current.setPanoId(panoId, latlng));
	}, [kakao, latlng, markerImg, markerSize, markerPos]);

	const initPos = useCallback(() => {
		console.log('initPos');
		ref_instMap.current.setCenter(latlng);
	}, [latlng]);

	//useThrottle커스텀훅을 통해서 throttle이 적용된 새로운 throttledInitPos라는 함수 반환받음
	const throttledInitPos = useThrottle(initPos);

	//해당 useEffect에 Index의존성 배열 불필요한 이유
	//이유 : 의존성배열에 createMap이 등록되어 있고 이미 createMap자체적으로 의존성배열에 Index에 따라 달라지는 값들을 등록되어 있음
	//따라서 지도를 그리는데 필요한 Index상태값 기반의 정보값이 바뀌면 새롭게 바뀐 내용으로 createMap이 호출되고 그렇지 않으면 메모이제이션 함수 자체 재호출
	useEffect(() => {
		createMap();
		window.addEventListener('resize', throttledInitPos);
		return () => window.removeEventListener('resize', throttledInitPos);
	}, [throttledInitPos, createMap]);

	useEffect(() => {
		Traffic
			? ref_instMap.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: ref_instMap.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic, kakao]);

	return (
		<section className='map'>
			<h2>Location</h2>

			{/* 맵, 로드뷰 프레임 */}
			<figure className='mapFrame'>
				<article ref={ref_mapFrame} className={`mapFrame ${!Roadview && 'on'}`}></article>
				<article ref={ref_viewFrame} className={`viewFrame ${Roadview && 'on'}`}></article>
			</figure>

			{/* 컨트롤 버튼 모음 */}
			<nav className='btnSet'>
				<ul className='branch'>
					{ref_info.current.map((el, idx) => (
						<li
							key={idx}
							className={idx === Index ? 'on' : ''}
							onClick={() => {
								//실제 각 지점 버튼 클릭시 Traffic, Roadview 상태값 초기화처리
								setIndex(idx);
								setTraffic(false);
								setRoadview(false);
							}}>
							{el.title}
						</li>
					))}
				</ul>

				<ul className='btnToggleSet'>
					<li onClick={() => setTraffic(!Traffic)} className={Traffic ? 'on' : ''}>
						{`Traffic ${Traffic ? 'OFF' : 'ON'}`}
					</li>
					<li onClick={() => setRoadview(!Roadview)} className={Roadview ? 'on' : ''}>
						{`Roadview ${Roadview ? 'OFF' : 'ON'}`}
					</li>
				</ul>
			</nav>
		</section>
	);
}
