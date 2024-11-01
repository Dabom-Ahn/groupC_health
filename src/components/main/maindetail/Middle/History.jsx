import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import HistoryTxt from './HistoryTxt';
import 'swiper/css';
import 'swiper/css/pagination';

export default function History() {
	const [images, setImages] = useState([]);

	// 플리커에서 특정 앨범의 이미지를 가져오는 함수
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
		<div className='photos'>
			<div className='photosTitle'>
				<img src='/pic/character/건이.png' className='gun' alt='캐릭터' />
				<h2 className='infotitle'>장기요양보험이 걸어온길</h2>
			</div>
			<div className='historytxt'>
				<HistoryTxt />
			</div>
			<Swiper
				slidesPerView={'4'}
				centeredSlides={false}
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
	);
}
