import historyData from '../../../../data/historydata';

export default function HistoryTxt() {
	return (
		<ul className='historyList'>
			{historyData.map((item, index) => (
				<li key={index} className='historyItem'>
					<h3>{item.title}</h3>
					<p>{item.detail}</p>
					<ul className='subDetails'>
						{item.subDetails.map((subDetail, subIndex) => (
							<li key={subIndex}>{subDetail}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
