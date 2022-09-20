import createClient from '$lib/prismicClient'

export async function load({ fetch, request }) {
	const UID = 'finn';
	const client = createClient({ fetch, request });
	const document = await client.getByUID('visitekaartje', UID);

//   console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
