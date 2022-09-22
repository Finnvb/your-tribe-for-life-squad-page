<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { text } from "svelte/internal";
</script>

<Header image={"hamburgerMenu.svg"} />

<main>
	<section class="detailcard">
		<div class="image-container">
			<h2>{@html prismicH.asHTML(data.data.name)}</h2>
			<img src="/assets/images/{data.uid}.jpg" alt="profilephoto" />
		</div>

		<div class="info-container">
			<div class="Info">
				<h3>Bio:</h3>
				<p>{@html prismicH.asHTML(data.data.bio)}</p>

				<h3 class="role">Role:</h3>
				<p>{data.data.role}</p>
			</div>

			<div class="links">
				<ul>
					<li><a href="">Profile Card</a></li>
					<li><a href={data.data.github.url}>Github</a></li>
					<li><a href="/leerjaar1">The founders</a></li>
				</ul>
			</div>
		</div>
	</section>
</main>

<style>
	a {
		color: #ffffff;
		text-decoration: none;
	}

	a:hover {
		border-bottom: 2.5px solid white;
	}

	.role {
		margin-top: 10px;
	}

	.image-container {
		width: 20rem;
		height: 20rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		position: absolute;
		z-index: -3;
		width: 100vw;
	}
	.detailcard {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5em;
		padding: 2rem 2rem;
		text-align: center;
		background-color: rgba(91, 91, 91, 1);
	   width: 100%;
	   height: 70vh;
	   margin: 1em;
	   margin-top: -.5em;
	}
	.detailcard h2 {
		font-size: 2.5em;
		z-index: 99;
		letter-spacing: 0.05em;
	}
	img {
		filter: drop-shadow(0px 5px 25px #000000);

		width: 20rem;
		height: 20rem;

		object-fit: cover;
		position: absolute;
	}

	.info-container {

		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
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

	

	@media (max-width: 30rem) {
		img {
			max-width: 15rem;
			height: 15rem;
		}

		.detailcard h2{
			font-size: 2rem;
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
			font-size: 3rem;
		}
	}

	@media (min-width: 50rem) {

		.detailcard h2 {
			position: absolute;
			font-size: 4rem;
		}

		img {
			max-width: 50%;
		}

		.Info {
			text-align: center;
		}
	}



	@media (min-width: 65rem) {
		.info-container {
			flex-direction: row;
			gap:12em;
			margin: 0 auto;
		}

		.Info{
	    	text-align: start;
		}

		.detailcard h2 {
			font-size: 4rem;
		}

		img {
			max-width: 36%;
		}

		
	}

	
</style>
