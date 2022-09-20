<script>
 import "../../styles/style.css";
 import Header from "$lib/components/Header.svelte";

 import * as prismicH from '@prismicio/helpers';
  export let data;
  const {  document }  = data;

</script>

<Header image={'hamburgerMenu.svg'}/>
<main>
    <h1>Leerjaar 1</h1>

<ul>
    <li><a href="/#">{@html prismicH.asHTML(document.data.name)}</a> </li>
    <li><a href="/#">gwrefdsc</a> </li>
    <li><a href="/#">gwrefdsc</a> </li>
    <li><a href="/#">gwrefdsc</a> </li>

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