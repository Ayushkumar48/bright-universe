<script>
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';

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
	class={`fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 px-8 transition-colors duration-300 ${
		bgTransparent ? 'bg-transparent' : 'bg-white shadow-md'
	}`}
>
	<a href="/" class="flex items-center">
		<img src="/logo.svg" alt="logo" class="h-20" />
	</a>
	<nav class="flex gap-6 font-semibold">
		{#each navItems as item}
			<a
				href={`/${item === 'home' ? '' : item}`}
				class={`transition-colors ${
					$page.url.pathname === `/${item === 'home' ? '' : item}` ? 'text-blue-500' : ''
				}`}
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
		>
			Request A Quote
		</button>
	</div>
</div>
