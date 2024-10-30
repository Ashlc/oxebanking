<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Section from '../../../components/Section.svelte';
	import InsuranceCard from './components/InsuranceCard.svelte';
	let selected = 'all';
	const handleSelect = (value: string) => {
		selected = value;
	};

	const myInsurances = [
		{
			title: 'Seguro de Vida',
			icon: 'mdi:cards-heart-outline',
			price: 1.9
		},
		{
			title: 'Seguro de Carro',
			icon: 'mdi:car-outline',
			price: 299.9
		},
		{
			title: 'Seguro de Viagem',
			icon: 'mdi:airplane-takeoff',
			price: 19.9
		},
		{
			title: 'Seguro Residencial',
			icon: 'mdi:shield-home-outline',
			price: 299.9
		}
	];

	const insurances = [
		{
			title: 'Seguro de Vida',
			icon: 'mdi:cards-heart-outline',
			description: 'Garanta o futuro de quem você ama hoje!',
			price: 1.9
		},
		{
			title: 'Seguro de Carro',
			icon: 'mdi:car-outline',
			description: 'Proteja seu carro e não seja surpreendido por um acidente!',
			price: 299.9
		},
		{
			title: 'Seguro de Viagem',
			icon: 'mdi:airplane-takeoff',
			description: 'Conte com mais tranquilidade em viagens nacionais e internacionais.',
			price: 19.9
		},
		{
			title: 'Seguro Residencial',
			icon: 'mdi:shield-home-outline',
			description: 'Proteção contra roubos, incêndios e muito mais para sua casa!',
			price: 299.9
		},
		{
			title: 'Cartão + Seguro',
			icon: 'mdi:credit-card-outline',
			description: 'Conte com a gente em casos de perda, roubo, furto e fraude!',
			price: 55.9
		},
		{
			title: 'Previdência Privada',
			icon: 'mdi:piggy-bank-outline',
			description: 'Aposentadoria garantida ou uma reserva para realizar seus sonhos.',
			price: 100
		}
	];
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
	<div class="flex flex-row gap-4">
		{#each insurances as insurance (insurance.title)}
			<InsuranceCard {insurance} />
		{/each}
	</div>
</Section>
