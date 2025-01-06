<script>
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let navItems = ['home', 'about_us', 'services', 'contact_us'];
	let bgTransparent = true;

	function handleScroll() {
		if (browser) {
			bgTransparent = window.scrollY === 0;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll();
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div
	class={`fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-gray-400 px-14 transition-colors duration-300 ${
		bgTransparent ? 'bg-transparent' : 'bg-white shadow-md'
	}`}
>
	<a href="/" class="flex items-center">
		{#if bgTransparent}
			<img src="/logowhite.svg" alt="logo" class="h-[5.5rem]" />
		{:else}
			<img src="/logo.svg" alt="logo" class="h-[5.5rem]" />
		{/if}
	</a>
	<nav class="flex gap-14 font-semibold">
		{#each navItems as item}
			<a
				href={`/${item === 'home' ? '' : item}`}
				class={`transition-colors hover:text-blue-700 ${
					$page.url.pathname === `/${item === 'home' ? '' : item}` ? 'text-blue-600' : ''
				}`}
				data-sveltekit-preload-data
			>
				{item
					.split('_')
					.map((word) => word[0].toUpperCase() + word.slice(1))
					.join(' ')}
			</a>
		{/each}
	</nav>
	<div class="flex items-center gap-2">
		<button class="hover:text-blue-600">🔍</button>
		<button
			class="rounded-lg bg-transparent px-4 py-2 text-black ring-1 ring-[#E9C46A] transition-all duration-300 ease-in-out hover:bg-[#E9C46A] hover:text-white hover:shadow-lg"
			onclick={() => goto('/contact_us')}
		>
			Request A Quote
		</button>
	</div>
</div>
