<script>
	import HomePieChart from './HomePieChart.svelte';
	import HomepageHero from './HomepageHero.svelte';
	import WhyChooseUs from './WhyChooseUs.svelte';
	import MeetTheTeam from './MeetTheTeam.svelte';
	import Contact from './Contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<HomepageHero />
	<WhyChooseUs />
	<HomePieChart />
	<MeetTheTeam />
	<Contact />
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
