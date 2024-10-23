import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonButton from './CommonButton';
import { infoArr } from '../../data/commonData';
import Banner from '../main/Banner';

export default function Info({ onClick }) {
	const [selectedButton, setSelectedButton] = useState(null);
	const navigate = useNavigate(); // useNavigate 훅 사용

	const handleClick = (path, idx) => {
		setSelectedButton(idx);
		onClick(path);

		// 경로가 외부 URL인지 내부 경로인지 구분
		if (path.startsWith('http')) {
			// 외부 URL로 이동
			setTimeout(() => {
				window.location.href = path;
			}, 500);
		} else {
			// 내부 경로일 경우 react-router-dom을 사용한 페이지 이동
			setTimeout(() => {
				navigate(path);
			}, 500);
		}
	};

	return (
		<div className='detaillist'>
			{infoArr.map((info, idx) => (
				<CommonButton
					key={idx}
					label={info.label}
					path={info.path}
					isSelected={selectedButton === null || selectedButton === idx}
					onClick={() => handleClick(info.path, idx)}
				/>
			))}
			<Banner />
		</div>
	);
}
