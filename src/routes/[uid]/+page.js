import createClient from '$lib/prismicClient'

export async function load({ fetch, request, params }) {

	const { uid } = params;
	const client = createClient({ fetch, request });
	const document = await client.getByUID('visitekaartje', uid);
	if(document) {
		return  {...document} 
	}

	error(404, 'Not found');
}