<script>
	import Footer from '$lib/Footer/Footer.svelte';
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="absolute">
	<Navbar />
	<div class="flex flex-col gap-16">
		{@render children()}
		<Footer />
	</div>
</div>
