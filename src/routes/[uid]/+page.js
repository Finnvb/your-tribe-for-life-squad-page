import createClient from '../../lib/prismicClient'

export async function load({ fetch, params }) {
  const client = createClient(fetch)  
  const { uid } = params
  const sprint = await client.getByUID('visitekaartje', uid)

  console.log(sprint);
  
  if (sprint) {
    return {
      body: { sprint }
    }
  }
  return {
    status: 404
  }
}