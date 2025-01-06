<script>
	import { MapPinAltOutline, EnvelopeOutline, PhoneOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex h-full w-full flex-col bg-[#264653] py-8 pl-20 pr-48 text-white">
	<div class="flex flex-row justify-between">
		<div class="flex flex-col gap-8">
			<img src="./logowhite.svg" alt="" class="my-[-20px] w-44" />
			<div class="flex flex-row items-center gap-4">
				<EnvelopeOutline />
				<div>info.brightuniverse@gmail.com</div>
			</div>
			<div class="flex flex-row items-center gap-4">
				<PhoneOutline />
				<div>+91 88001 08303</div>
			</div>
			<div class="flex flex-row items-center gap-4">
				<MapPinAltOutline />
				<div>
					<p>BRIGHT UNIVERSE</p>
					<p>(International Freight Forwarders and Custom Clearance Agent)</p>
					<p>Bagdola Villagage Extn.</p>
					<p>New Delhi - 110077 (India)</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div class="text-2xl font-bold">Quick Links</div>
			<div class="flex flex-col gap-6">
				<div>Home</div>
				<div>About</div>
				<div>Air Freight</div>
				<div>Land Freight</div>
				<div>Sea Freight</div>
				<div>Warehousing</div>
				<div>Contact Us</div>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div class="text-2xl font-bold">Market Area</div>
			<div class="flex flex-col gap-6">
				<div>Pan India</div>
				<div>USA</div>
				<div>Europe</div>
				<div>Thailand</div>
				<div>China</div>
				<div>Malaysia</div>
				<div>South Korea</div>
				<div>Mexico</div>
				<div>Canada</div>
			</div>
		</div>
	</div>
</div>
