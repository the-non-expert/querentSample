<script>
	import asyncImage from '$lib/images/aboutUsHeroImage.svg';
	import logo from '$lib/images/querentMainLogo.svg';

	let metrics = [
		{ number: '38k', description: 'Relationships discovered' },
		{ number: '90%', description: 'Entities identified' },
		{ number: '9/10', description: 'Reviews' }
	];
</script>

<section
	class="flex flex-col md:flex-row justify-center bg-[#F8F8F8] p-8 rounded-lg"
	style="width: 100%"
>
	<div class="w-11/12">
		<img src={logo} alt="Logo" style=" width: 300px;" class="mb-5" />

		<h2 class="text-2xl font-bold text-gray-800 mb-4 font-['Josefin-Sans']">
			An Asynchronous Engine for LLMs
		</h2>
		<p class="mb-4 font-['Montserrat'] text-sm">
			- Querent revolutionizes data workflows, providing a robust asynchronous engine for large
			language models (LLMs). Its suite, from web scraping collectors to ingestors and processors,
			streamlines data transformation and feature extraction.
		</p>
		<p class="mb-4 font-['Montserrat'] text-sm">
			- With powerful Workflow Management and Scalable Storage Solutions, Querent effortlessly
			handles large datasets, ensuring seamless scalability. It's the framework of choice for
			advanced data operations, driving efficiency and innovation in knowledge graph creation and
			text pre-processing.
		</p>
		<p class="mb-4 font-['Montserrat'] text-sm">
			- Begin by configuring your data collectors, processors, and storage systems. Enjoy seamless
			data gathering, efficient processing, and robust storage solutions, all complemented by
			powerful task orchestration for scalability and comprehensive monitoring for reliability.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each metrics as metric}
				<div class="p-4 text-left">
					<p class="text-5xl font-bold text-[#177fbf] font-['Josefin-Sans']">
						{metric.number}
					</p>
					<p class="text-sm text-[#177fbf] font-['Montserrat']">{metric.description}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex-1">
		<div class="p-4">
			<img src={asyncImage} alt="Innovative Solution" class="max-w-sm mx-auto" />
		</div>
	</div>
</section>
