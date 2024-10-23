import { useState } from 'react';
import CommonButton from './CommonButton';
import { managerArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Manager({ onClick }) {
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
			{managerArr.map((manager, idx) => (
				<CommonButton
					key={idx}
					label={manager.label}
					path={manager.path}
					isSelected={selectedButton === null || selectedButton === idx}
					onClick={() => handleClick(manager.path, idx)}
				/>
			))}

			<Banner />
		</div>
	);
}
