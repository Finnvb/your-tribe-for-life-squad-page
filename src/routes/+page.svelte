<script>
    import Header from "$lib/components/Header.svelte";
    import MainContent from "$lib/components/MainContent.svelte";
    import "../styles/style.css";



    import * as prismicH from '@prismicio/helpers';
  export let data;
  const {  document }  = data;
    

  </script>


<Header image={'hamburgerMenu.svg'}/>
<main>
<MainContent title={'Leerjaar 1'} text={'The founders'} image={'leerjaar1.jpg'} link={'/leerjaar1'}/>
<MainContent title={'Leerjaar 2'} text={'The second generation'} image={'leerjaar2.jpg'} link={'/test'}/>
<MainContent title={'Soon..'} text={'The future'} image={'soon.jpg'} link={'/'}/>
</main>


  <!-- <p class="text"> {@html prismicH.asHTML(document.data.name)}</p> -->
  

  <!-- <img src={document.data.profielfoto.url} alt="test"> -->


<style>

main {
        display: flex;
        position: absolute;
        top: 0;
        width: 100vw;
        z-index: -2;
        color: #ffffff;
    }

    @media (max-width: 40em) {

main{
    flex-direction: column;
   
}
}
</style>