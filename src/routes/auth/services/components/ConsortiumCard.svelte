<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import type { ConsortiumType } from '../../../../types/Consortium';

	export let consortium: ConsortiumType = {
		image: 'https://via.placeholder.com/150',
		title: 'Imóveis',
		price: 1999.9,
		description: []
	};

	export let onClick: () => void = () => {};

	const { image, title, price, installments, contractDate, contracted, description } = consortium;
</script>

<button
	class="animated-card col-span-1 flex flex-col justify-between gap-3 rounded-xl border p-4 text-left transition-all ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-400/10"
	aria-label={title}
	on:click={onClick}
>
	<div class="flex w-full flex-col gap-4">
		<img src={image} alt={title} class="h-32 w-full rounded-xl object-cover" />
		<h3 class="text-lg font-semibold">{title}</h3>
	</div>
	{#if contracted}
		<div>
			{#if installments}
				<p class="text-sm text-secondary-200">Parcelas: {installments} vezes</p>
			{:else}
				<p class="text-sm text-secondary-200">À vista</p>
			{/if}
			{#if contractDate}
				<p class="text-sm text-secondary-200">
					Contratado em: {new Date(contractDate).toLocaleDateString('pt-BR')}
				</p>
			{/if}
		</div>
		<p class="font-semibold text-primary-700">
			R$ {price.toLocaleString('pt-BR', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}/mês
		</p>
		<Button class="w-full">Participar do leilão</Button>
	{:else}
		<ul class="list-inside list-disc text-sm text-secondary-200">
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
