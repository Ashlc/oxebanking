<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Modal, Radio } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';
	import { investmentTypes, type InvestmentType } from './investments';

	export let open: boolean = false;
	export let type: InvestmentType | undefined;
	export let onClose: () => void;
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
	<Section classNames="px-2 [&:last-child]:border-b-0 [&>*]:border-b">
		{#if type}
			{#each investmentTypes[type].options as option}
				<div class="flex flex-row items-center justify-between p-4">
					<div class="flex flex-col">
						<p class="text-lg font-bold text-secondary-300">{option.title}</p>
						<p class="text-secondary-100">
							Rende <span class="font-bold">{option.rentability}</span> do CDI
						</p>
						<p class="text-sm font-normal text-secondary-100">{option.period}</p>
					</div>
					<Radio value={option.title} name="investment-type" />
				</div>
			{/each}
		{/if}
	</Section>
	<Section classNames="flex flex-row justify-end gap-2 p-4">
		<Button class="gap-2" size="lg">Continuar <Icon icon="mdi:arrow-right" height={20} /></Button>
	</Section>
</Modal>
