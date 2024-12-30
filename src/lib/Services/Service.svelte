<script>
	import containers from '$lib/assets/containers.jpg';
	let { service } = $props();
</script>

<div class="group h-[400px] w-[19rem] [perspective:1000px]">
	<div
		class="relative h-full w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
	>
		<div
			class="absolute h-full w-full rounded-xl ring-1 ring-slate-300 [backface-visibility:hidden]"
		>
			<img
				src={'./services/' + service.title + '.jpg'}
				alt="containers"
				class="h-full w-full rounded-xl object-cover"
			/>
		</div>
		<div
			class="absolute h-full w-full rounded-xl bg-white ring-1 ring-slate-300 [backface-visibility:hidden] [transform:rotateY(180deg)]"
		>
			<div class="flex h-full flex-col items-center justify-center gap-4 px-5 text-lg">
				<div class="font-bold">{service.title.split('-').join(' ')}</div>
				<p class="text-center">
					{service.description}
				</p>
				<button class="rounded bg-[#2A9D8F] px-4 py-2 text-sm text-white">VIEW MORE</button>
			</div>
		</div>
	</div>
</div>
