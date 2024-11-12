<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Select } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import Section from '../../../components/Section.svelte';

	const currencies = [
		{ name: '🇺🇸 Dólar estadunidense', value: 'USD', icon: 'openmoji:flag-united-states', quote: 0, coin: '$' },
		{ name: '🇪🇺 Euro', value: 'EUR', icon: 'openmoji:flag-european-union', quote: 0, coin: '€' },
		{ name: '🇬🇧 Libra esterlina', value: 'GBP', icon: 'openmoji:flag-united-kingdom', quote: 0, coin: '£' },
		{ name: '🇦🇷 Pesos argentinos', value: 'ARS', icon: 'openmoji:flag-argentina', quote: 0, coin: '$' },
		{ name: '🇨🇦 Dólar canadense', value: 'CAD', icon: 'openmoji:flag-canada', quote: 0, coin: '$' },
		{ name: '🇦🇺 Dólar australiano', value: 'AUD', icon: 'openmoji:flag-australia', quote: 0, coin: '$' },
		{ name: '🇮🇱 Novo Shekel israelense', value: 'ILS', icon: 'openmoji:flag-israel', quote: 0, coin: '₪' },
		{ name: '🇯🇵 Iene japonês', value: 'JPY', icon: 'openmoji:flag-japan', quote: 0, coin: '¥' },
		{ name: '🇨🇿 Coroa checa', value: 'CZK', icon: 'openmoji:flag-czechia', quote: 0, coin: 'Kč' },
		{ name: '🪙 Bitcoin', value: 'BTC', icon: 'openmoji:bitcoin', quote: 0, coin: '₿' },
		{ name: '💲 Ethereum', value: 'ETH', icon: 'openmoji:ethereum', quote: 0, coin: 'Ξ' },
		{ name: '💰 Litecoin', value: 'LTC', icon: 'openmoji:litecoin', quote: 0, coin: 'Ł' },
	];

	const fetchCurrencyQuote = async (currency: string) => {
		const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currency}-BRL`);
		const data = await response.json();
		return Number(data[`${currency}BRL`].ask);
	};

	onMount(async () => {
		for (const currency of currencies) {
			currency.quote = await fetchCurrencyQuote(currency.value);
		}
	});
	
	let selectedCurrency: string | undefined = undefined;

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
			{#if !selectedCurrency}
				<div></div>
			{:else}
				<div class="flex flex-col">
				<p class="text-lg font-medium">Cotação atual:</p>
				<div class="flex flex-row items-center gap-4">
					<p class="text-3xl font-bold">{currencies.find((currency) => currency.value === selectedCurrency)?.coin} 1,00 {selectedCurrency}</p>
					<Icon icon="ic:baseline-compare-arrows" height="32" />
					{#key currencies}
						<p class="text-3xl font-bold">{currencies.find((currency) => currency.value === selectedCurrency)?.quote.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} BRL</p>
					{/key}
				</div>
					<p class="mt-2 text-sm text-secondary-100">Atualizado em 10/10/2024</p>
				</div>
			{/if}
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
