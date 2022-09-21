<script>
    export let data;
    import * as prismicH from '@prismicio/helpers';

    import Header from "$lib/components/Header.svelte";
    import { text } from 'svelte/internal';
</script>



<Header image={'hamburgerMenu.svg'}/>



<main>
	<section class="detailcard">
		<h2
			>{@html prismicH.asHTML(data.data.name)}</h2
		>
		<img src="/assets/images/Justin.jpeg" alt="profilephoto" />

    <!-- <img src={data.data.github} alt="test">  -->

<div class="info-container">
		<div class="Info">
			<h3>Bio:</h3>
			<p>{@html prismicH.asHTML(data.data.bio)}</p>
		</div>

		<div class="links">
			<ul>
				<li><a href="">Profile Card</a></li>
				<li><a href="{(data.data.github.url)}">Github</a></li>
				<li><a href="/leerjaar1">The founders</a></li>
			</ul>
		</div>
  </div>
	</section>
</main>









  <!-- {@html prismicH.asHTML(data.data.name)} -->
<style>




a{
  color: #FFFFFF;
  text-decoration: none;

}

a:hover{
  border-bottom: 2.5px solid white;
 
}


	main {


  display: flex;
    justify-content: center;
    align-items: center;
		padding: 0 1rem;
		margin-top: -0.5em;
		color: white;
		background-color: rgba(91, 91, 91, 1);
    position: absolute;
    z-index: -3;
    width: 90vw;

 
	}
	.detailcard {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5em;
		padding: 0.5em;
		text-align: center;
    /* width: 90vw; */

 
	}
	.detailcard h2 {
		font-size: 2.5em;
		z-index: 99;
    letter-spacing: 0.05em;
	}
	img {
		/* position: absolute; */
		padding: 1em;
		height: auto;
		width: 90%;
		filter: drop-shadow(0px 5px 25px #000000);
	}
	/* .detailcard span {
		color: transparent;
		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: white;
	} */

  .info-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  

	.Info {
		line-height: 1.5em;
	}

	.links ul {
		display: flex;
		flex-direction: row;
		gap: 2.5em;
		padding: 0.5em;
	}

	/* .links li {
		border-bottom: 2.5px solid white;
	} */

	@media (min-width: 38.25rem) {
		img {
			max-width: 70%;
		}
	}

	@media (min-width: 40rem) {
		img {
			max-width: 55%;
		}

		.detailcard {
			height: 80vh;
		}
		.detailcard h2 {
			font-size: 4.5rem;
		}
	}

	@media (min-width: 50rem) {

  
    .detailcard{
      text-align: start;
    }
		.detailcard h2 {
      position: absolute;
			font-size: 5.5rem;
		}

		img {
			max-width:50%;
		}

    .Info{
     text-align:start;
    }
  }

  @media (min-width: 65rem) {

  .info-container{
    flex-direction: row;;
    gap: 5.5em;
  }

  .detailcard h2 {
			font-size: 5rem;
  }

  img{
    max-width: 35%;
  }

}


</style>
