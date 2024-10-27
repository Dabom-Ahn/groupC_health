export function GalleryList({ albumName, Flickr }) {
	return (
		<section className='galleryList'>
			<h2>{albumName}</h2>
			{Flickr?.length === 0 && <p>앨범에 이미지가 없습니다.</p>}
			{Flickr?.map((data, idx) => (
				<article key={idx} className='image-item'>
					<img
						src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
						alt={`Image ${idx + 1}`}
						className='pic' // 'pic' 클래스를 추가하여 관찰할 요소로 사용
					/>
				</article>
			))}
		</section>
	);
}
