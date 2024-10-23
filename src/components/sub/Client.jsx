import { useState } from 'react';
import CommonButton from './CommonButton';
import { clientArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Client({ onClick }) {
	const [selectedButton, setSelectedButton] = useState(null);

	const handleClick = (path, idx) => {
		setSelectedButton(idx);
		onClick(path);

		setTimeout(() => {
			window.location.href = path;
		}, 500);
	};

	return (
		<div className='detaillist'>
			{clientArr.map((client, idx) => (
				<CommonButton
					key={idx}
					label={client.label}
					path={client.path}
					isSelected={selectedButton === null || selectedButton === idx}
					onClick={() => handleClick(client.path, idx)}
				/>
			))}

			<Banner />
		</div>
	);
}
