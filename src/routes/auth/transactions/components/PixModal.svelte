<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import PixPaymentKey from './PixPaymentKey.svelte';
	import PixPaymentValue from './PixPaymentValue.svelte';

	export let openModal = false;
	export let onClose: () => void;

	let key = '';
	let setKey: (key: string) => void;
	let value = '';
	let setValue: (value: string) => void;

	const favorites = [
		{
			name: 'João da Silva',
			key: '1234567890'
		}
	];

	const handleClose = () => {
		onClose();
	};

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

<Modal
	title={sections[activeSection].title}
	bind:open={openModal}
	on:close={handleClose}
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
</Modal>
