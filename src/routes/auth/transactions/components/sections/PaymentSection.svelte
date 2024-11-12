<script lang="ts">
	import { Input } from 'flowbite-svelte';

	import Icon from '@iconify/svelte';
	import { formatNumber } from '@/lib';

	export let value: string;
	export let setValue: (value: string) => void;

	export let balance = 8530.43;
	export let isBalanceVisible = false;

	function toggleBalanceVisibility() {
		isBalanceVisible = !isBalanceVisible;
	}
</script>

<div class="flex w-full flex-col items-center justify-center gap-9">
	<div
		class="flex w-full flex-row items-center justify-between rounded-sm border border-secondary-400 px-4 py-3 font-semibold text-secondary-400"
	>
		<div class="flex flex-row items-center justify-start gap-3">
			<Icon icon="mdi:wallet-outline" />
			Saldo em conta
		</div>
		<div class="flex flex-row items-center justify-start gap-4">
			<div class="flex flex-row items-center justify-start gap-2">
				<span>R$</span>
				{#if isBalanceVisible}
					<span>{formatNumber(balance)}</span>
				{:else}
					<div class="flex h-5 w-12 rounded-sm bg-neutral-400"></div>
				{/if}
			</div>
			<button onclick={toggleBalanceVisibility}>
				{#if isBalanceVisible}
					<Icon icon="solar:eye-closed-bold" />
				{:else}
					<Icon icon="mdi:eye-outline" />
				{/if}
			</button>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center gap-4">
		<div class="flex flex-row items-center justify-center text-4xl font-bold text-primary-600">
			<span>R$</span>
			<Input
				class="w-1/2 border-none bg-transparent py-0 text-center font-bold text-primary-600 outline-none sm:text-4xl"
				type="number"
				size="lg"
				bind:value
				on:input={(e) => {
					// Ignore text
					if (isNaN(parseFloat(value))) {
						return;
					}

					setValue(value);
				}}
			/>
		</div>
		<div class="h-px w-56 border border-gray-300"></div>
	</div>
	<div class="flex flex-col items-center justify-center">
		<div class="text-sm font-normal text-[#a17c6b]">Pagar para</div>
		<div class="w-64 text-center text-xl font-bold text-secondary-400">
			João Albuquerque Santos da Silva Mendes
		</div>
	</div>
	<div
		class="inline-flex items-center justify-start gap-4 self-stretch rounded-lg bg-[#e8a940]/25 px-6 py-3"
	>
		<Icon icon="mdi:alert-circle-outline" class="text-[#a17c6b]" />
		<div class="shrink grow basis-0 text-sm font-medium text-[#a17c6b]">
			Antes de pagar, confira os dados de quem vai receber e cuidado com golpes.
		</div>
	</div>
</div>
