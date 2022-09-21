<header class="header">
	<nav class="navbar">
		<h1>FDND.</h1>
		<!--Hamburger menu-->
		<div class="hamburger">
			<span class="bar" />
			<span class="bar" />
			<span class="bar" />
		</div>
	</nav>
</header>

<style>
	.header {
		color: white;
		font-size: 1.5em;
		font-weight: 900;
		line-height: 58.09px;
		padding: 0.7em;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
	}
	/* Hamburger styles*/

	.hamburger {
	}
	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: white;
	}
</style>
