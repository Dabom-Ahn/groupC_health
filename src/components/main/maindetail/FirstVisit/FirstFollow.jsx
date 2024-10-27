import { useState } from 'react';
import ImageSlider from './ImageSlider'; // ImageSlider 컴포넌트 import
import { process1, process2 } from '../../../../data/firstvisitImagedata';

export default function FirstFollow() {
	const [showGallery, setShowGallery] = useState(false);

	const toggleGallery = () => {
		setShowGallery(prevState => !prevState);
	};

	return (
		<div className='firstGallery'>
			<div className='firstfollow'>
				<p>CLICK!</p>
				<div className='followBanner' onClick={toggleGallery} style={{ cursor: 'pointer' }}>
					<p>노인장기요양보험이란</p>
				</div>
			</div>
			{showGallery && (
				<>
					<section>
						<h2>인정절차</h2>
						<ImageSlider images={process1} />
					</section>
					<section>
						<h2>이용절차</h2>
						<ImageSlider images={process2} />
					</section>
				</>
			)}
		</div>
	);
}
