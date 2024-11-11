<script>
	import Icon from '@iconify/svelte';
	import { Button } from 'flowbite-svelte';
	import pixImg from './../../../../assets/qrcode.png';

	const keys = ['mail@example.com', '99 99999-9999', '000.000.000-00'];
</script>

<div class="flex w-full flex-col items-center gap-8">
	<div class="flex w-full flex-col gap-3">
		<div class="text-secondary-3200 flex w-full flex-row items-center gap-2">
			<Icon icon="material-symbols:qr-code" />
			<p class="text-sm font-medium">QR Code</p>
		</div>
		<div
			class="flex aspect-square w-full flex-col items-center justify-center rounded-md border p-4"
		>
			<img src={pixImg} alt="QR Code" class="w-full" />
		</div>
		<Button color="alternative" class="w-full gap-2">
			<Icon icon="ph:numpad" />
			Personalizar valor
		</Button>
	</div>
	<div class="flex w-full flex-col gap-3">
		<div class="text-secondary-3200 flex w-full flex-row items-center gap-2">
			<Icon icon="material-symbols:key-outline" />
			<p class="text-sm font-medium">Chaves</p>
		</div>
		<div class="flex w-full flex-col gap-2">
			{#each keys as key}
				<div class="flex flex-row items-center gap-2">
					<Button color="alternative" class="aspect-square border-0 p-1 text-primary-700">
						<Icon icon="material-symbols:content-copy-outline" height="18" />
					</Button>
					<p>{key}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex w-full flex-col gap-3">
		<div class="text-secondary-3200 flex w-full flex-row items-center gap-2">
			<Icon icon="material-symbols:share" />
			<p class="text-sm font-medium">Compartilhar</p>
		</div>
		<div class="flex flex-row gap-2">
			<Button color="primary" class="basis-1/2">QR Code</Button>
			<Button color="primary" class="basis-1/2">Copia e Cola</Button>
		</div>
	</div>
</div>
