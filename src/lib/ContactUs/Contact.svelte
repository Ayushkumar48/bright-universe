<script>
	import { enhance } from '$app/forms';
	import {
		EnvelopeSolid,
		BookSolid,
		UserSolid,
		MessageCaptionSolid,
		PhoneSolid
	} from 'flowbite-svelte-icons';
	import { toast } from 'svelte-sonner';
	let { form } = $props();
	$effect(() => {
		if (form?.success) {
			toast.success('Message sent successfully!');
		}
	});
</script>

<div class="flex flex-col items-center justify-center gap-10 px-4 py-10 lg:px-10">
	<div class="flex flex-col gap-4 text-center font-bold">
		<div class="flex flex-row items-center justify-center gap-2 text-lg">
			<img src="./marker.jpg" alt="marker" class="w-5" />
			<div class="text-[#8555F9]">Contact Us</div>
		</div>
		<div class="text-4xl text-gray-700">Get in touch with us</div>
	</div>

	<div
		class="flex w-full max-w-6xl flex-col rounded-lg bg-white shadow-lg ring-1 ring-gray-200 lg:flex-row"
	>
		<div class="h-64 lg:h-auto lg:w-1/2">
			<img
				src="./contact.jpg"
				alt="Contact"
				class="h-full w-full rounded-t-lg object-cover lg:rounded-l-lg lg:rounded-r-none"
			/>
		</div>

		<form class="flex w-full flex-col gap-6 p-6 lg:w-1/2" method="post" use:enhance>
			<h2 class="text-center text-2xl font-bold text-gray-700">Call us or fill the form</h2>

			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label for="name" class="text-sm font-medium">Your Name:</label>
					<div class="relative">
						<UserSolid class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
						<input
							type="text"
							placeholder="name"
							name="name"
							class="h-12 w-full rounded-lg bg-gray-50 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<label for="email" class="text-sm font-medium">Your Email:</label>
					<div class="relative">
						<EnvelopeSolid class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
						<input
							type="email"
							placeholder="email"
							name="email"
							class="h-12 w-full rounded-lg bg-gray-50 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label for="subject" class="text-sm font-medium">Your Subject:</label>
					<div class="relative">
						<BookSolid class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
						<input
							type="text"
							placeholder="subject"
							name="subject"
							class="h-12 w-full rounded-lg bg-gray-50 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<label for="number" class="text-sm font-medium">Contact Number:</label>
					<div class="relative">
						<PhoneSolid class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
						<input
							type="tel"
							placeholder="number"
							name="number"
							class="h-12 w-full rounded-lg bg-gray-50 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<label for="message" class="text-sm font-medium">Message:</label>
				<div class="relative">
					<MessageCaptionSolid class="absolute left-3 top-3 text-gray-500" />
					<textarea
						placeholder="type a message.."
						name="message"
						rows="4"
						class="w-full rounded-lg bg-gray-50 py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					></textarea>
				</div>
			</div>

			<div class="flex justify-center">
				<button
					type="submit"
					class="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</div>
