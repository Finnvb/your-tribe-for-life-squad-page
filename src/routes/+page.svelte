<script>
    import Header from "$lib/components/Header.svelte";


    import createClient from '$lib/prismicClient';
    import  * as prismicH from '@prismicio/helpers';
    
    const client = createClient()
    const prismicQuery = client.getFirst()
  </script>


<Header/>


  
  {#await prismicQuery}
    <p>Loading...</p>
  {:then prismicResponse}
    <h1>{prismicH.asText(prismicResponse.data.title)}</h1>
    {@html prismicH.asHTML(prismicResponse.data.description)}
  {:catch error}
    <pre>{error.message}</pre>
  {/await}







<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
