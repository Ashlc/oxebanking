<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button } from 'flowbite-svelte';
	import type { InsuranceType } from '../../../../types/Insurance';
	export let insurance: InsuranceType;

	const { title, icon, description, price, contracted } = insurance;
	export let onClick: () => void;
</script>

<button
	class="animated-card col-span-1 flex flex-col justify-between gap-6 rounded-xl border p-4 text-left transition-all ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-400/10"
	aria-label={title}
	on:click={onClick}
	class:h-72={contracted}
	class:h-56={!contracted}
>
	<div class="flex flex-row items-center gap-2">
		<Icon {icon} height="20" />
		<h1 class="font-semibold">{title}</h1>
	</div>

	{#if contracted}
		<ul class="list-inside list-disc text-sm text-secondary-200">
			{#each description as item}
				<li>{item}</li>
			{/each}
		</ul>
		<div class="w-full rounded-xl border py-3">
			<p class="w-full text-center text-2xl font-semibold text-primary-700">
				R$ {price.toLocaleString('pt-BR', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				})}/mês
			</p>
		</div>
		<Button class="w-full">Ver detalhes</Button>
	{:else}
		<ul class="text-secondary-200">
			{#each description as item}
				<li>{item}</li>
			{/each}
		</ul>
		<div class="w-full">
			<p class="text-base">A partir de</p>
			<p class="text-lg font-semibold text-primary-700">
				R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
				<span class="text-sm font-normal">/mês</span>
			</p>
		</div>
	{/if}
</button>
