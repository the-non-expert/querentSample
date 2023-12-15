<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="app">
	<Navigation />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
