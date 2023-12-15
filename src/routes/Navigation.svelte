<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let showDropdown = false;

	/**
	 * @param {string} route
	 */
	function isActive(route) {
		return $page.url.pathname === route;
	}

	/**
	 * @param {string} route
	 */
	function navigate(route) {
		goto(route);

		// if (activeTab != 'Solutions') showDropdown = false;
	}
</script>

<nav class="text-black p-4 flex justify-around items-center border-b-2 border-[#177FBF]">
	<!-- <div class="logo">
		<img src={logo} alt="Logo" class="h-8" />
	</div> -->
	<ul class="flex gap-20 text-lg font-['Montserrat']">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class={`mx-4 cursor-pointer ${isActive('/') ? 'border-b-4 border-blue-500' : ''}`}
			on:click={() => navigate('/')}
		>
			Home
		</li>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class={`mx-4 cursor-pointer ${isActive('/about') ? 'border-b-4 border-blue-500' : ''}`}
			on:click={() => navigate('/about')}
		>
			About
		</li>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class={`mx-4 cursor-pointer ${isActive('/contact') ? 'border-b-4 border-blue-500' : ''}`}
			on:click={() => navigate('/contact')}
		>
			Contact
		</li>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class={`relative mx-4 cursor-pointer ${
				isActive('/solutions') ? 'border-b-4 border-blue-500' : ''
			}`}
			on:click={() => navigate('/solutions')}
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={() => (showDropdown = !showDropdown)}>Solutions</span>
			{#if showDropdown}
				<div
					class="absolute top-full mt-2 py-2 w-48 bg-white shadow-xl border border-gray-300 rounded-md z-10"
				>
					<a href="abc" class="text-sm block px-4 py-2 hover:bg-gray-100">Data Fabrics</a>
					<a href="abc" class="text-sm block px-4 py-2 hover:bg-gray-100">Observability</a>
					<a href="abc" class="text-sm block px-4 py-2 hover:bg-gray-100">Industrial AI</a>
					<a href="abc" class="text-sm block px-4 py-2 hover:bg-gray-100">Graph Computing</a>
					<a href="abc" class="text-sm block px-4 py-2 hover:bg-gray-100">Threat Intelligence</a>
				</div>
			{/if}
		</li>
	</ul>
</nav>
