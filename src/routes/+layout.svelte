<script>
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="absolute">
	<Navbar />
	{@render children()}
</div>
