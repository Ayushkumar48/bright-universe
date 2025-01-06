<script>
	import containers from '$lib/assets/containers.jpg';
	import Service from '$lib/Services/Service.svelte';
	let services = [
		{
			title: 'Custom-Clearence',
			description:
				'Wave Logistics offers streamlined Custom Clearance Services to simplify global trade operations for businesses...'
		},
		{
			title: 'Cargo-Consolidation',
			description:
				'Wave Logistics provides efficient Cargo Consolidation Services tailored for businesses looking to optimize their shipping...'
		},
		{
			title: 'Door-To-Door-Delivery',
			description:
				'Wave Logistics provides seamless Door To Door Delivery Services, offering convenience and reliability for businesses..'
		},
		{
			title: 'International-Courier',
			description:
				'Wave Logistics offers reliable and efficient International Courier Services designed to meet the fast-paced needs of global businesses...'
		},
		{
			title: 'Air-Freight',
			description: ''
		},
		{
			title: 'Land-Freight',
			description: ''
		},
		{
			title: 'Sea-Freight',
			description: ''
		},
		{
			title: 'WareHouse',
			description: ''
		},
		{
			title: 'Custom-Brokerage',
			description: 'We provide total support for related tasks and accurate customers clearance'
		},
		{
			title: 'Project-Cargo-Handling',
			description: 'Large project logistics management and procurement services are what we do best'
		}
	];
</script>

<div class="flex flex-col gap-10 pb-16">
	<div>
		<img src={containers} alt="containers" />
	</div>
	<div class="flex flex-col gap-20 px-10">
		<div class="flex flex-col gap-4 text-center font-bold">
			<div class="flex flex-row items-center justify-center gap-2 text-lg">
				<img src="./marker.jpg" alt="marker" class="w-5" />
				<div class="text-[#8555F9]">OUR PROJECT</div>
			</div>
			<div class="text-4xl text-gray-700">SPECIAL SERVICES</div>
		</div>
		<div class="flex flex-row flex-wrap gap-x-11 gap-y-11">
			{#each services as service}
				<Service {service} />
			{/each}
		</div>
	</div>
</div>
