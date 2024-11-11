<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Layout from '../../../components/Layout.svelte';
	import LatestTransactions from '../home/LatestTransactions.svelte';
	import AccountTab from './components/AccountTab.svelte';
	import PixModal from './components/PixModal.svelte';
	import PixTab from './components/PixTab.svelte';

	let visible = true;
	let visibleIcon = 'mdi:eye-off-outline';
	let balance = 34245.23;
	let formattedBalance = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

	const toggleVisibility = () => {
		visible = !visible;
		if (visible) {
			visibleIcon = 'mdi:eye-off-outline';
		} else {
			visibleIcon = 'mdi:eye-outline';
		}
	};

	let selectedTab = 'account';
	const activeStyle = 'bg-primary-700 text-white';
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Transações']}>
	<div class="flex flex-row gap-6">
		<div class="flex basis-3/4 flex-col gap-12">
			<div class="flex flex-row items-center gap-3">
				<Icon icon="ic:outline-account-balance-wallet" height="20" />
				{#if visible}
					<p class="w-1/5 text-2xl font-bold text-secondary-500">{formattedBalance}</p>
				{:else}
					<div class="h-8 w-1/5 rounded-lg bg-neutral-200"></div>
				{/if}
				<Button color="light" size="sm" on:click={toggleVisibility} class="aspect-square p-2">
					<Icon icon={visibleIcon} height="20" />
				</Button>
			</div>
			<div class="flex flex-col gap-6">
				<div class="flex flex-row gap-6">
					<PixModal />
				</div>
				<LatestTransactions />
			</div>
		</div>
		<div class="flex basis-1/4 flex-col">
			<div class="flex h-full flex-col items-center gap-6 rounded-lg border p-4">
				<ButtonGroup class="w-full *:!ring-primary-500">
					<Button
						color={selectedTab === 'account' ? 'primary' : 'light'}
						class="grow"
						on:click={() => (selectedTab = 'account')}
					>
						Conta
					</Button>
					<Button
						color={selectedTab === 'pix' ? 'primary' : 'light'}
						class="grow"
						on:click={() => (selectedTab = 'pix')}
					>
						Pix
					</Button>
				</ButtonGroup>
				{#if selectedTab === 'account'}
					<AccountTab />
				{:else if selectedTab === 'pix'}
					<PixTab />
				{/if}
			</div>
		</div>
	</div>
</Layout>
