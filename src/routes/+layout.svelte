<script>
	import Footer from '$lib/Footer/Footer.svelte';
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
	let { children } = $props();
</script>

<Toaster richColors />
<div class="absolute">
	<Navbar />
	<div class="flex flex-col">
		{@render children()}
		<Footer />
	</div>
</div>
