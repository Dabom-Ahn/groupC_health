import ImageSlider from './ImageSlider';
import { process1, process2 } from '../../../data/firstvisitImagedata';

export default function FirstFollow({ showGallery, toggleGallery }) {
	return (
		<>
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
		</>
	);
}
