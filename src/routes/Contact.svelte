<script>
	import logo from '$lib/images/querentMainLogo.svg';
	import locationIcon from '$lib/images/locationIcon.svg';
	import emailIcon from '$lib/images/emailIcon.svg';
</script>

<div class=" mx-auto flex p-6 pt-12 items-center gap-36 border-t-2">
	<!-- Left Side: Logo and Text -->
	<div class="flex flex-col items-center text-center">
		<img src={logo} alt="Querent Logo" class="w-96 h-auto mb-4" />
		<p class="w-96 font-['Montserrat']">
			Unlock Insights, Asynchronous Scaling, and Forge a Knowledge-Driven Future.
		</p>
	</div>

	<!-- Right Side: Contact Info -->
	<div class="text-left">
		<h2 class="text-2xl font-bold mb-4 font-['Josefin-Sans']">Contact</h2>
		<ul class="font-['Montserrat']">
			<li class="mb-2 flex items-center">
				<img src={emailIcon} alt="Email" class="w-6 h-6 mr-2" />
				<span>contact@querent.xyz</span>
			</li>
			<!-- <li class="mb-2 flex items-center">
				<img src="" alt="Phone" class="w-6 h-6 mr-2" />
				<span>+123 456 7890</span>
			</li> -->
			<li class="mb-2 flex items-center">
				<img src={locationIcon} alt="Address" class="w-6 h-6 mr-2" />
				<span>1916 Hidden Pond Dr, Palmhurst, TX 78573</span>
			</li>
		</ul>
	</div>
</div>
