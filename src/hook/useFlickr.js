import { useQuery } from '@tanstack/react-query';

const fetchFlickr = async ({ queryKey }) => {
	const baseURL = 'https://www.flickr.com/services/rest/';
	const method_mine = 'flickr.people.getPhotos';

	const flickr_api = import.meta.env.VITE_FLICKR_API;
	const myID = '201500116@N03';
	const num = 18;
	let url = '';
	const urlMine = `${baseURL}?method=${method_mine}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

	queryKey[1].type === 'mine' && (url = urlMine);

	const data = await fetch(url);
	const json = await data.json();
	return json.photos.photo;
};

export const useFlickrQuery = opt => {
	return useQuery({
		queryKey: ['flickrQuery', opt],
		queryFn: fetchFlickr,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};
