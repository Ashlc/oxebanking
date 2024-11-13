<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';
	import { investmentTypes, type InvestmentType } from './investments';

	export let open: boolean = false;
	export let type: InvestmentType | undefined;
	export let onClose: () => void;
	
	let selectedOption: string;
</script>

<Modal bind:open on:close={onClose} autoclose outsideclose bodyClass="p-0">
	<Section classNames="gap-4 border-b p-6 text-lg font-semibold text-secondary-400">
		{#if type}
			<div class="flex flex-row items-center gap-2">
				<Icon icon={investmentTypes[type].icon} height={24} />
				<p>{`Escolha um tipo de ${investmentTypes[type].name}`}</p>
			</div>
			<p class="justify text-base font-normal tracking-tight text-secondary-200">
				{investmentTypes[type].description}
			</p>
		{/if}
	</Section>
	<Section classNames="[&:last-child]:border-b-0 [&>*]:border-b gap-0">
		{#if type}
			{#each investmentTypes[type].options as option}
					<button class="flex flex-col w-full items-start py-4 px-6 hover:bg-gray-100">
						<p class="text-lg font-bold text-secondary-300">{option.title}</p>
						<p class="text-secondary-200">
							Rende <span class="font-bold">{option.rentability}</span> do CDI
						</p>
						<p class="text-sm font-normal text-secondary-100">{option.period}</p>
					</button>
			{/each}
		{/if}
	</Section>
	<Section classNames="flex flex-row justify-end gap-2 p-4">
		<Button class="gap-2" size="lg">Continuar <Icon icon="mdi:arrow-right" height={20} /></Button>
	</Section>
</Modal>
