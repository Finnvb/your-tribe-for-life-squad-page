<script>
 import "../../styles/style.css";
 import Header from "$lib/components/Header.svelte";

 import * as prismicH from '@prismicio/helpers';
 export let data
 console.log(data)
  const {  document }  = data;

</script>

<Header image={'hamburgerMenu.svg'}/>
<main>
    <h1>Leerjaar 1</h1>

<ul>
    {#each data.document as data}
    <li><a href="/{data.uid}">{@html prismicH.asHTML(data.data.name)}</a> </li>
    {/each}
    
</ul>

</main>


<style>

main{
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: -3;
}

li{
    list-style: none;
    margin: 1rem 0;
}

a{
    text-decoration: none;
    color: #FFFFFF;
}

.text{
    color: #FFFFFF;
}

</style>