<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';
	import type { ConsortiumType } from '../../../types/Consortium';
	import ConsortiumCard from './components/ConsortiumCard.svelte';
	import { consortiums, myConsortiums } from './mock';

	let selected = 'all';
	export let openModal: (index: number) => void;
	export let onSelect: (consortium: ConsortiumType) => void;

	const handleSelect = (value: string) => {
		selected = value;
	};

	const handleCardClick = (consortium: ConsortiumType) => {
		openModal(0);
		onSelect(consortium);
	};
</script>

<Section gap={8}>
	<div class="flex flex-row items-center justify-between">
		<div class="flex flex-row items-center gap-2">
			<Icon icon="material-symbols:key-outline" height="24" />
			<h1 class="text-xl font-semibold">Consórcio</h1>
		</div>
		<ButtonGroup class="w-1/3 *:!ring-primary-700">
			<Button
				class="grow"
				on:click={() => handleSelect('all')}
				color={selected === 'all' ? 'primary' : 'light'}>Todos os consórcios</Button
			>
			<Button
				class="grow"
				on:click={() => handleSelect('contrated')}
				color={selected === 'contrated' ? 'primary' : 'light'}>Meus consórcios</Button
			>
		</ButtonGroup>
	</div>
	<div class="grid grid-cols-6 gap-6">
		{#if selected === 'all'}
			{#each consortiums as consortium}
				<ConsortiumCard {consortium} onClick={() => handleCardClick(consortium)} />
			{/each}
		{:else}
			{#each myConsortiums as consortium}
				<ConsortiumCard {consortium} onClick={() => handleCardClick(consortium)} />
			{/each}
		{/if}
	</div>
</Section>
