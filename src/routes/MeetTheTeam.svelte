<script>
	import PS from '$lib/images/01.jpeg';
	import NG from '$lib/images/02.jpg';
	import AJJW from '$lib/images/04.jpeg';
	import AJ from '$lib/images/03.jpeg';
	import githubIcon from '$lib/images/githubIcon.svg';
	import linkedinIcon from '$lib/images/linkedinSVG.svg';

	const teamMembers = [
		{
			name: 'Puneet Saraswat',
			image: PS,
			linkedin: 'https://www.linkedin.com/in/psaraswat10074/',
			github: 'https://github.com/saraswatpuneet'
		},
		{
			name: 'Nishant Gupta',
			image: NG,
			linkedin: 'https://www.linkedin.com/in/bob',
			github: 'https://www.github.com/bob'
		},
		{
			name: 'Ayush Jhunjhunwala',
			image: AJJW,
			linkedin: 'https://www.linkedin.com/in/ayush-jhunjhunwala-724472163/',
			github: 'https://github.com/the-non-expert'
		},
		{
			name: 'Ansh Joshi',
			image: AJ,
			linkedin: 'https://www.linkedin.com/in/ansh-joshi-626bb8184/',
			github: 'https://github.com/Ansh5461'
		}
	];
</script>

<div class="container mx-auto p-6 text-center">
	<h2 class="text-3xl font-bold mb-20 mt-10 font-['Josefin-Sans']">
		Meet the Team <span class="block w-16 h-4 mx-auto border-b-4 border-[#177FBF]" />
	</h2>
	<div class="grid gap-0 grid-cols-4">
		{#each teamMembers as member}
			<div class="team-member">
				<img src={member.image} alt={member.name} class="w-40 h-40 rounded-full mx-auto" />
				<h3 class="font-semibold mt-2 font-['Montserrat']">{member.name}</h3>
				<div class="flex justify-center mt-2 gap-3">
					<a href={member.linkedin} target="_blank" class="mx-1">
						<img src={linkedinIcon} alt="github" class="w-4 opacity-50" />
					</a>
					<a href={member.github} target="_blank" class="mx-1">
						<img src={githubIcon} alt="github" class="w-4 opacity-50" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
