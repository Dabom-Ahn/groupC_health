import LinkMenu from '../common/LinkMenu';
import { clientArr } from '../../data/commonData';

export default function Client() {
	return (
		<div className='detaillist'>
			<LinkMenu linkArr={clientArr} />
		</div>
	);
}
