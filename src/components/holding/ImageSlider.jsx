import { useEffect, useRef } from 'react';

export default function ImageSlider({ images }) {
	const sliderRef = useRef(null);
	const observerRef = useRef();

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0.1
		};

		observerRef.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				} else {
					entry.target.classList.remove('visible');
				}
			});
		}, options);

		const elements = sliderRef.current?.querySelectorAll('.image-card');
		elements?.forEach(el => observerRef.current.observe(el));

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [images]);

	if (!images || images.length === 0) return <p>No images to display.</p>;

	// 이미지 개수에 따라 각 이미지의 너비를 계산
	const imageWidth = `calc((100vw - ${(images.length - 1) * 10}px) / ${images.length})`;

	return (
		<div className='scroll-container' ref={sliderRef}>
			{images.map((image, index) => (
				<div key={index} className='image-card' style={{ flex: `0 0 ${imageWidth}` }}>
					<img src={image.src} alt={image.title} />
					<p>{image.title}</p>
				</div>
			))}
		</div>
	);
}
