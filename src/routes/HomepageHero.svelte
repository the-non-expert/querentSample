<script>
	import logo from '$lib/images/querentMainLogo.svg';
	import bgVideo from '$lib/images/homePagebg.mp4';
	import { goto } from '$app/navigation';

	function requestDemo() {
		goto('/contact');
	}
</script>

<div class="relative min-h-screen flex flex-col justify-evenly items-center text-center">
	<video autoplay loop muted class="video-bg">
		<source src={bgVideo} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="logo">
		<img src={logo} alt="Logo" style=" width: 800px;" />
	</div>
	<div class="flex flex-col justify-evenly items-center text-center">
		<h1 class="text-3xl font-bold mb-4 font-['Josefin-Sans']">
			Leveraging AI to Build Semantic Knowledge Graphs
		</h1>
		<p class="max-w-md mb-8 font-['Montserrat']">
			Querent's robust architecture simplifies building enterprise-grade data fabrics, enabling you
			to uncover hidden data relationships.
		</p>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			on:click={requestDemo}
		>
			Request Demo
		</button>
	</div>
</div>

<style>
	.video-bg {
		position: fixed;
		bottom: 0;
		right: 0;
		min-width: 100%;
		min-height: 100%;
		z-index: -1;
		opacity: 0.3;
	}
</style>
