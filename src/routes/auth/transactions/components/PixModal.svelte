<script lang="ts">
	import Icon from '@iconify/svelte';
	import PixIcon from '@/assets/icons/pix.svelte';

	import { Button } from 'flowbite-svelte';

	import PixPaymentKey from './PixPaymentKey.svelte';
	import PixPaymentValue from './PixPaymentValue.svelte';

	import * as Dialog from '$lib/components/ui/dialog/index.js';

	let key = '';
	let setKey: (key: string) => void;
	let value = '';
	let setValue: (value: string) => void;

	const actions = [
		{
			icon: 'material-symbols:send-money',
			label: 'Pagar'
		},
		{
			icon: 'material-symbols:place-item',
			label: 'Depositar'
		},
		{
			icon: 'material-symbols:calendar-clock-outline',
			label: 'Agendar'
		},
		{
			icon: 'mdi:mixer-settings',
			label: 'Limites'
		},
		{
			icon: 'material-symbols:favorite-outline',
			label: 'Favoritos'
		}
	];

	const favorites = [
		{
			name: 'João da Silva',
			key: '1234567890'
		}
	];

	const sections = [
		{
			title: 'Para quem você deseja pagar?'
		},
		{
			title: 'Personalizar valor'
		}
	];

	let activeSection = 0;

	const handleContinue = () => {
		activeSection++;
	};
</script>

<Dialog.Root>
	{#each actions as action}
		<Dialog.Trigger
			class="flex aspect-square w-1/4 flex-col items-center justify-center gap-2 rounded-lg border bg-neutral-200 transition-all hover:bg-neutral-300 focus:ring focus:!ring-secondary-100 active:bg-neutral-400"
		>
			<Icon icon={action.icon} height="32" />
			{action.label}
		</Dialog.Trigger>
	{/each}
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title icon={PixIcon}>Pagar com PIX</Dialog.Title>
		</Dialog.Header>
		<Dialog.Holder>
			{#if activeSection === 0}
				<PixPaymentKey {key} {setKey} {favorites} />
			{:else if activeSection === 1}
				<PixPaymentValue {value} {setValue} />
			{/if}
		</Dialog.Holder>
		<Dialog.Footer>
			<Button class="w-full gap-2 transition-all" size="lg" on:click={handleContinue}>
				Continuar
				<Icon icon="ic:arrow-forward" height="20" />
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<!-- <Modal
	title={sections[activeSection].title}
	bind:open={openModal}
	on:close={handleClose}
	autoclose
	classBody="flex flex-col gap-4"
>
	{#if activeSection === 0}
		<PixPaymentKey {key} {setKey} {favorites} />
	{:else if activeSection === 1}
		<PixPaymentValue {value} {setValue} />
	{/if}

	<Button class="w-full gap-2 transition-all" size="lg" on:click={handleContinue}>
		Continuar
		<Icon icon="ic:arrow-forward" height="20" />
	</Button>
</Modal> -->
