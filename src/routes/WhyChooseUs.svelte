<script>
	import LLMBrain from '$lib/images/llmBrain.jpg';
	import DataDrivenInsights from '$lib/images/insightsImage.jpg';
	import Scalability from '$lib/images/scalability.jpeg';
	import gnnIntegration from '$lib/images/gnnIntegration.svg';
	import asyncProcess from '$lib/images/asyncProcess.svg';
	import memoryUsage from '$lib/images/memoryUsage.svg';
</script>

<div class="container mx-auto px-4">
	<h2 class="text-4xl font-bold text-center my-8 font-['Josefin-Sans']">
		Why Choose Us?
		<span class="block w-24 h-4 mx-auto border-b-4 border-[#177FBF]" />
	</h2>
	<div class="grid md:grid-cols-2 gap-4">
		<!-- Reason 1 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={asyncProcess} alt="Async" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Asynchronous at its Core</h3>
				<p>
					Querent thrives in an asynchronous world. With asynchronous processing, we handle multiple
					data sources seamlessly, eliminating bottlenecks for utmost efficiency.
				</p>
			</div>
		</div>
		<!-- Reason 2 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={Scalability} alt="Async" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Scalability Redefined</h3>
				<p>
					Scaling your data operations is effortless with Querent. We scale horizontally, empowering
					you to process multiple data streams without breaking a sweat.
				</p>
			</div>
		</div>
		<!-- Reason 3 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={gnnIntegration} alt="Async" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Graph Neural Network Integration</h3>
				<p>
					Querent seamlessly integrates with Graph Neural Networks (GNNs), enabling advanced data
					analysis, recommendation systems, and predictive modeling.
				</p>
			</div>
		</div>
		<!-- Reason 4 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={DataDrivenInsights} alt="Async" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Data-Driven Insights</h3>
				<p>
					Dive deep into data-driven insights with Querent's tools. Extract actionable information
					and make data-informed decisions with ease.
				</p>
			</div>
		</div>
		<!-- Reason 5 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={LLMBrain} alt="LLM" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Leverage Multi-modal Language Models</h3>
				<p>
					Utilize state-of-the-art language models (LLMs) for text data. Querent empowers natural
					language processing, tackling complex text-based tasks.
				</p>
			</div>
		</div>
		<!-- Reason 6 -->
		<div class="flex items-center p-4 shadow-lg rounded-lg font-['Montserrat']">
			<img src={memoryUsage} alt="memory usage" class="w-20 h-20 mr-4" />
			<div>
				<h3 class="text-xl font-semibold">Efficient Memory Usage</h3>
				<p>
					Querent is mindful of memory constraints. Our framework uses memory-efficient techniques,
					ensuring you can handle large datasets economically.
				</p>
			</div>
		</div>
	</div>
</div>
