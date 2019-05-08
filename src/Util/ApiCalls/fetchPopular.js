import fetchUrl from './fetchUrl'

export const fetchPopular = async (url) => {
    const response = await fetchUrl(url);
    if(!response.ok) {
        throw Error('Error fetching Popular')
    }
    return await response.json();
}