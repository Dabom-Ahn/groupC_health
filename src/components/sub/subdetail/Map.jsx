import { useEffect, useRef, useState, useCallback } from 'react';
import useThrottle from '../../../hook/useThrottle';

export default function Map() {
	const { kakao } = window;

	const [Index, setIndex] = useState(0);
	const [Traffic, setTraffic] = useState(false);
	const [Roadview, setRoadview] = useState(false);

	const ref_info = useRef([
		{
			title: '죽헌 미르데이센터(강동1호)',
			latlng: new kakao.maps.LatLng(37.558105, 127.079071),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99) // 마커 오프셋 설정
		},
		{
			title: '더사랑재가복지센터',
			latlng: new kakao.maps.LatLng(37.536837, 127.122423),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99)
		},
		{
			title: '한가족 데이케어센터',
			latlng: new kakao.maps.LatLng(37.665777, 127.035597),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99)
		},
		{
			title: '하늘센터(강동2호)',
			latlng: new kakao.maps.LatLng(37.558105, 127.079071),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99) // 마커 오프셋 설정
		},
		{
			title: '재가복지센터',
			latlng: new kakao.maps.LatLng(37.536837, 127.122423),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99)
		},
		{
			title: '한가족센터',
			latlng: new kakao.maps.LatLng(37.665777, 127.035597),
			markerImg: '/pic/sub/marker1.png',
			markerSize: new kakao.maps.Size(40, 40),
			markerOffset: new kakao.maps.Point(116, 99)
		}
	]);
	const { latlng, markerImg, markerSize, markerOffset } = ref_info.current[Index];
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

		// 마커 이미지 객체 생성
		const markerImage = new kakao.maps.MarkerImage(markerImg, markerSize, {
			offset: markerOffset
		});

		// 마커 설정
		ref_instMarker.current = new kakao.maps.Marker({
			position: latlng,
			image: markerImage
		});

		ref_instView.current = new kakao.maps.Roadview(ref_viewFrame.current);
		ref_instMarker.current.setMap(ref_instMap.current);
		[ref_instType.current, ref_instZoom.current].forEach(inst => ref_instMap.current.addControl(inst));
		ref_instClient.current.getNearestPanoId(latlng, 50, panoId => ref_instView.current.setPanoId(panoId, latlng));
	}, [kakao, latlng, markerImg, markerSize, markerOffset]);

	const initPos = useCallback(() => {
		console.log('initPos');
		ref_instMap.current.setCenter(latlng);
	}, [latlng]);

	const throttledInitPos = useThrottle(initPos);
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
		<div className='map'>
			<div className='mapTitle'>
				<p>요양기관 찾기</p>
			</div>

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
		</div>
	);
}
