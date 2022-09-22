<script>
	import Header from "$lib/components/Header.svelte";
	import Menu from "$lib/components/Menu.svelte";
</script>

<Header image={"hamburgerMenu.svg"} />

<section class="about container">
	<section class="about">
		<h1>ABOUT US.</h1>
		<p
			>Bij de Ad Frontend Design & Development doe je alles met code: met code
			los je een parkeerprobleem op voor de Gemeente Amsterdam, ontwerp je voor
			het systeem van de Openbare Bibliotheek een betere zoekfunctie, en help je
			samen met de verpleegkundigen van het Amsterdam UMC de zorg te verbeteren. <br
			/>Je richt je tijdens deze tweejarige studie op webdesign, visual
			interface design en frontend development.<br /> Vanaf het begin van de opleiding
			werk je aan actuele opdrachten van échte opdrachtgevers, en leer je samenwerken
			in multidisciplinaire teams.</p
		>
	</section>

	<section class="shortinfo">
		<img src="/assets/images/fdnd.svg" alt="Fdnd" />
		<p
			>Laat je inspireren door alle studenten van leerjaar 1 & 2 van FDND, maak
			kennis met de studenten door een kijkje te nemen naar de visitekaartjes
			die zij hebben <span>designed</span> en gebouwd.
		</p>
	</section>

	<section class="button">
		<a href="/">Ga naar leerjaren &rarr;</a>
	</section>
</section>

<style>
	.about {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		background-color: rgba(91, 91, 91, 1);
		color: white;
		height: 100%;
		margin: 1em;
		margin-top: 0.5em;
	}

	.about h1 {
		font-size: 3em;
		padding: 0.7em;
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 1.2rem;
		text-underline-offset: -0.5em;
		text-decoration-color: #8cb4ff;
		text-decoration-skip-ink: none;
		/* text-decoration-skip: none; */
	}

	.about p {
		text-align: center;
		font-size: 0.9em;
		padding: 1em;
		padding-bottom: 3em;
	}

	.shortinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 90%;
		height: auto;
		filter: grayscale(100%);
	}

	.button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-bottom: 2em;
	}

	.button > a {
		text-decoration: none;
		color: #8cb4ff;
		background-color: grey;
		padding: 0.6em;
		border-radius: 0.2em;
		font-size: 1.2em;
		font-weight: 600;
	}

	@media (min-width: 58.75rem) {
		.about {
			justify-content: flex-end;
			align-items: flex-start;
		}

		.about h1 {
			text-decoration-thickness: 1.7rem;
			text-underline-offset: -0.4em;
		}

		.about > p {
			text-align: start;
			font-size: 1.3em;
			padding-left: 2.8em;
		}

		.shortinfo {
			display: flex;
			flex-direction: row;
		}
		.shortinfo > img {
			width: 85%;
			padding-left: 4.5em;
			padding-bottom: 4em;
		}

		.shortinfo > p {
			text-align: start;
			font-size: 1.3em;
		}

		.shortinfo span {
			font-weight: 900;
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-thickness: 0.7em;
			text-underline-offset: -0.7em;
			text-decoration-color: #8cb4ff;
			text-decoration-skip-ink: none;
			text-decoration-skip: none;
		}

		.about h1 {
			font-size: 5em;
		}
		.button {
			margin: 0 auto;
			padding-bottom: 4em;
		}
	}
</style>
