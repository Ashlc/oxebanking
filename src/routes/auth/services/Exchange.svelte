<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Select } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';

	const currencies = [
		{ name: '🇺🇸 Dólar estadunidense', value: 'USD', icon: 'openmoji:flag-united-states' },
		{ name: '🇪🇺 Euro', value: 'EUR', icon: 'openmoji:flag-european-union' },
		{ name: '🇦🇷 Pesos argentinos', value: 'ARS', icon: 'openmoji:flag-argentina' }
	];

	let selectedCurrency = 'USD';

	function handleCurrencyChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		if (target) {
			selectedCurrency = target.value;
		}
	}

	const quickActions = [
		{
			icon: 'ic:baseline-call-received',
			label: 'Compra de moeda'
		},
		{
			icon: 'ic:baseline-call-made',
			label: 'Venda de moeda'
		},
		{
			icon: 'material-symbols:history',
			label: 'Últimas transações'
		}
	];
</script>

<Section gap={4}>
	<div class="flex flex-row items-center gap-2">
		<Icon icon="ic:baseline-currency-exchange" height="24" />
		<h1 class="text-xl font-semibold">Câmbio</h1>
	</div>
	<div class="flex flex-row justify-between gap-6">
		<div class="flex basis-1/2 flex-col gap-8 rounded-xl border p-4">
			<div class="flex h-12 flex-row rounded-lg border border-neutral-500">
				<div
					class="flex w-40 flex-row items-center justify-center gap-2 rounded-l-lg bg-neutral-400"
				>
					<p class="text-sm font-bold">Moeda atual</p>
				</div>
				<Select
					bind:value={selectedCurrency}
					items={currencies}
					class="rounded-none rounded-r-lg border-none text-base font-medium"
					placeholder="Selecione a moeda"
					on:change={handleCurrencyChange}
				/>
			</div>
			<div class="flex flex-col">
				<p class="text-lg font-medium">Cotação atual:</p>
				<div class="flex flex-row items-center gap-4">
					<p class="text-4xl font-bold">1,00 {selectedCurrency}</p>
					<Icon icon="ic:baseline-compare-arrows" height="32" />
					<p class="text-4xl font-bold">R$ 5,00 BRL</p>
				</div>
				<p class="mt-2 text-sm text-secondary-100">Atualizado em 10/10/2024</p>
			</div>
		</div>
		<div class="flex grow flex-col gap-2 rounded-xl border p-4">
			<div class="flex w-full flex-col gap-4">
				{#each quickActions as action}
					<div class="flex flex-row items-center gap-4">
						<Button
							color="primary"
							class="aspect-square bg-neutral-400 p-3 text-secondary-400 transition-all hover:bg-neutral-500 active:bg-neutral-200"
						>
							<Icon icon={action.icon} height="24" />
						</Button>
						<p>{action.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>
