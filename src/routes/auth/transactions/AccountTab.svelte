<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button } from 'flowbite-svelte';

	const localAccount = {
		number: '123456789-0',
		agency: '0001',
		bank: '055 - OxeBanking'
	};

	const globalAccount = {
		number: '987654321-0',
		ach: '1234567890',
		wire: '1234567890',
		bank: 'Community Federal Savings Bank'
	};

	const share = () => {
		console.log('Compartilhar');
	};
</script>

<div class="flex w-full flex-col gap-6 rounded-md border p-4">
	<div class="flex flex-row items-center gap-2">
		<Icon icon="twemoji:flag-brazil" />
		<p class="font-medium">Conta brasileira</p>
	</div>
	<div class="flex flex-col gap-3">
		<div>
			<p class="text-sm font-medium text-secondary-100">Número da conta</p>
			<p>{localAccount.number}</p>
		</div>
		<div>
			<p class="text-sm font-medium text-secondary-100">Agência</p>
			<p>{localAccount.agency}</p>
		</div>
		<div>
			<p class="text-sm font-medium text-secondary-100">Banco</p>
			<p>{localAccount.bank}</p>
		</div>
	</div>
	<Button color="primary" on:click={share}>Compartilhar</Button>
</div>

<div class="flex w-full flex-col gap-6 rounded-md border p-4">
	<div class="flex flex-row items-center gap-2">
		<Icon icon="twemoji:globe-with-meridians" />
		<p class="font-medium">Conta global</p>
	</div>
	<div class="flex flex-col gap-3">
		<div>
			<p class="text-sm font-medium text-secondary-100">Account Number</p>
			<p>{globalAccount.number}</p>
		</div>
		<div>
			<p class="text-sm font-medium text-secondary-100">ACH Routing Number</p>
			<p>{globalAccount.ach}</p>
		</div>
		<div>
			<p class="text-sm font-medium text-secondary-100">Wire Routing Number</p>
			<p>{globalAccount.wire}</p>
		</div>
		<div>
			<p class="text-sm font-medium text-secondary-100">Bank Name</p>
			<p>{globalAccount.bank}</p>
		</div>
	</div>
	<Button color="primary" on:click={share}>Compartilhar</Button>
</div>
