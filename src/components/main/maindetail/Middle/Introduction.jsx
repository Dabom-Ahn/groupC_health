import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';

export default function Introduction() {
	const [images, setImages] = useState([]);

	// 플리커에서 특정 앨범의 이미지 가져오는 함수
	const fetchImagesFromAlbum = async () => {
		try {
			const flickr_api = import.meta.env.VITE_FLICKR_API;
			const myID = import.meta.env.VITE_MYID_KEY;
			const photoset_id = import.meta.env.VITE_PHOTOSET_KEY;
			const num = 10;
			const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickr_api}&user_id=${myID}&photoset_id=${photoset_id}&per_page=${num}&nojsoncallback=1&format=json`;

			const response = await fetch(url);
			const data = await response.json();

			// 플리커 이미지 URL 생성
			const fetchedImages = data.photoset.photo.map(photo => {
				return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
			});

			setImages(fetchedImages);
		} catch (error) {
			console.error('Error fetching images from Flickr:', error);
		}
	};

	useEffect(() => {
		fetchImagesFromAlbum();
	}, []);

	return (
		<section className='introduction'>
			<div className='History'>
				<h2>추진경과</h2>
				<li>고령화시대에 대비,「노인요양보장제도」도입 발표</li>
				<li> 노인요양보장제도 시행 준비체계 구축 2003.03 ~ 2004.02</li>
				<li>「노인장기요양보험법(안)」 입법추진 2005.10.19</li>
				<li>시범사업 추진 2005.07 ~ 2006.03</li>
				<li>노인장기요양보험제도 시행 2008.03 ~ 2008.07</li>
			</div>
			<div className='photos'>
				<Swiper
					slidesPerView={'4'}
					centeredSlides={true}
					spaceBetween={30}
					pagination={{
						clickable: true
					}}
					modules={[Pagination]}
					className='mySwiper'>
					{images.map((imageUrl, index) => (
						<SwiperSlide key={index}>
							<img src={imageUrl} alt={`Flickr Slide ${index + 1}`} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
