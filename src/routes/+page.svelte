<script>
	import HomePieChart from './HomePieChart.svelte';
	import HomepageHero from './HomepageHero.svelte';
	import WhyChooseUs from './WhyChooseUs.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<HomepageHero />
	<WhyChooseUs />
	<HomePieChart />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
