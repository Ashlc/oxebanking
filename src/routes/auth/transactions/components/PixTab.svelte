<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button } from 'flowbite-svelte';

	/* @ts-ignore */
	import QrCode from 'svelte-qrcode';

	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input, Label } from 'flowbite-svelte';

	let pixValue = '';
	let isModalOpen = false;

	const closeModal = () => {
		isModalOpen = false;
	};

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
			<QrCode
				value={`00020101021226850014br.gov.bcb.pix0136${pixValue}52040000530398654041.005802BR5902BR97`}
			/>
		</div>
		<Dialog.Root open={isModalOpen} controlledOpen={true}>
			<Dialog.Trigger>
				<Button
					color="alternative"
					class="w-full gap-2"
					on:click={() => {
						isModalOpen = true;
					}}
				>
					<Icon icon="ph:numpad" />
					Personalizar valor
				</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title icon={'mdi:qrcode'}>Personalizar valor</Dialog.Title>
				</Dialog.Header>

				<Dialog.Holder>
					<div class="flex w-full flex-col gap-4">
						<Label for="value">Valor</Label>
						<Input id="value" type="text" placeholder="R$ 0,00" bind:value={pixValue} />
					</div>
				</Dialog.Holder>

				<Dialog.Footer>
					<Button class="w-full gap-2 transition-all" size="lg" on:click={closeModal}>
						Personalizar valor
					</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
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
