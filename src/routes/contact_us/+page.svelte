<script>
	import containers from '$lib/assets/containers.jpg';
	import Contact from '$lib/ContactUs/Contact.svelte';
	let { form } = $props();
</script>

<div class="flex flex-col gap-10 pb-16">
	<div>
		<img src={containers} alt="containers" />
	</div>
	<Contact {form} />
</div>
