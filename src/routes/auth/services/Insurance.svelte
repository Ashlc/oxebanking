<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';
	import type { InsuranceType } from '../../../types/Insurance';
	import InsuranceCard from './components/InsuranceCard.svelte';
	import { insurances, myInsurances } from './mock';

	let selected = 'all';
	export let openModal: (index: number) => void;
	export let onSelect: (insurance: InsuranceType) => void;
	const handleSelect = (value: string) => {
		selected = value;
	};

	const handleCardClick = (insurance: InsuranceType) => {
		openModal(1);
		onSelect(insurance);
	};
</script>

<Section gap={6}>
	<div class="flex flex-row items-center justify-between">
		<div class="flex flex-row gap-2">
			<Icon icon="material-symbols:shield-with-heart-outline" height="24" />
			<h1 class="text-xl font-semibold">Seguros</h1>
		</div>
		<ButtonGroup class="w-1/3 *:!ring-primary-700">
			<Button
				class="grow"
				on:click={() => handleSelect('all')}
				color={selected === 'all' ? 'primary' : 'light'}>Todos os seguros</Button
			>
			<Button
				class="grow"
				on:click={() => handleSelect('contrated')}
				color={selected === 'contrated' ? 'primary' : 'light'}>Seguros contratados</Button
			>
		</ButtonGroup>
	</div>
	<div class="grid grid-cols-4 gap-6">
		{#if selected === 'all'}
			{#each insurances as insurance}
				<InsuranceCard {insurance} onClick={() => handleCardClick(insurance)} />
			{/each}
		{:else}
			{#each myInsurances as insurance}
				<InsuranceCard {insurance} onClick={() => handleCardClick(insurance)} />
			{/each}
		{/if}
	</div>
</Section>
