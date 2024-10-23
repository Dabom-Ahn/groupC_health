export default function CommonButton({ label, path, isSelected, onClick }) {
	const opacityStyle = isSelected ? 1 : 0;

	return (
		<div className='buttonWrapper'>
			<button className='buttonItem' onClick={onClick} style={{ opacity: opacityStyle, transition: 'opacity 0.12s' }}>
				{label.toUpperCase()}
			</button>
		</div>
	);
}
