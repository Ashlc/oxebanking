<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Badge, Button, ButtonGroup } from 'flowbite-svelte';
	import Layout from '../../../components/Layout.svelte';
	import Section from '../../../components/Section.svelte';
	import Graph from './Graph.svelte';
	import InvestmentCards from './InvestmentCards.svelte';
	import {
		investmentTypes,
		rentabilityStyles,
		type InvestmentType,
		type Rentability
	} from './investments';
	import InvestModal from './InvestModal.svelte';
	import MyInvestment, { type Investment } from './MyInvestment.svelte';

	let balance = 34245.23;
	let activePeriod = 'today';

	const rentability: Rentability = {
		value: 135.23,
		style: 'positive'
	};

	let formattedBalance = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	let formattedRentability = rentability.value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});

	const statistics = [
		{
			label: 'Saldo inicial',
			value: 34245.23
		},
		{
			label: 'Entradas',
			value: 135.23
		},
		{
			label: 'Saídas',
			value: 135.23
		},
		{
			label: 'Rendimentos',
			value: 135.23
		},
		{
			label: 'Saldo final',
			value: 34245.23
		}
	];

	const investments: Investment[] = [
		{
			name: 'Fundo de segurança',
			amount: 10000,
			rentability: 100
		},
		{
			name: 'CDB de Liquidez Diária',
			amount: 2500,
			rentability: 15
		},
		{
			name: 'CDB',
			amount: 1700,
			rentability: 10
		},
		{
			name: 'Tesouro Direto',
			amount: 1000,
			rentability: 10
		}
	];

	let investModalOpen = false;
	let selectedInvestmentType: InvestmentType | undefined;
	const openInvestModal = (v: InvestmentType) => {
		selectedInvestmentType = v;
		investModalOpen = true;
	};
	const closeInvestModal = () => {
		investModalOpen = false;
		selectedInvestmentType = undefined;
	};
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Investimentos']}>
	<div class="flex flex-col gap-8">
		<Section>
			<div class="flex flex-row items-center gap-2 text-secondary-100">
				<Icon icon="material-symbols:trending-up" height="16" />
				<p class="font-semibold text-secondary-200">Carteira de investimentos</p>
			</div>
			<div class="flex flex-row items-center gap-2">
				<p class="w-fit text-4xl font-bold text-secondary-400">{formattedBalance}</p>
				<Badge large class={`gap-1 border bg-white`} rounded>
					<div
						class={`flex flex-row items-center gap-[2px] ${rentabilityStyles[rentability.style].color}`}
					>
						<p class="font-semibold">{formattedRentability}</p>
						<Icon icon={rentabilityStyles[rentability.style].icon} class="mb-[1px]" />
					</div>
					<span>de rendimento</span>
				</Badge>
			</div>
		</Section>
		<div class="flex flex-row gap-8">
			<div class="flex basis-3/4 flex-col gap-12">
				<Graph />
			</div>
			<div class="flex basis-1/4 flex-col gap-4">
				<ButtonGroup>
					<Button
						on:click={() => (activePeriod = 'today')}
						color={activePeriod === 'today' ? 'primary' : 'light'}
						class="grow">Hoje</Button
					>
					<Button
						on:click={() => (activePeriod = 'week')}
						color={activePeriod === 'week' ? 'primary' : 'light'}
						class="grow">Semana</Button
					>
					<Button
						on:click={() => (activePeriod = 'month')}
						color={activePeriod === 'month' ? 'primary' : 'light'}
						class="grow">Mês</Button
					>
					<Button
						on:click={() => (activePeriod = 'year')}
						color={activePeriod === 'year' ? 'primary' : 'light'}
						class="grow">Ano</Button
					>
				</ButtonGroup>
				<div class="flex flex-col gap-6 rounded-lg border p-4">
					<div>
						<p class="text-lg font-semibold text-secondary-300">Resumo do período</p>
						<p class="font-medium text-primary-700">13/10/2024 - 20/10/2024</p>
					</div>
					<div class="flex flex-col gap-2 [&>*:last-child]:border-b-0 [&>*]:border-b">
						{#each statistics as statistic}
							<div class="flex flex-row items-center justify-between py-1">
								<p class="text-secondary-300">{statistic.label}</p>
								<p class="font-semibold text-secondary-500">
									{statistic.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<Section>
			<p class="text-lg font-bold text-secondary-300">Meus investimentos</p>
			<div class="flex w-full flex-row gap-8">
				{#each investments as investment}
					<MyInvestment {investment} />
				{/each}
			</div>
		</Section>
		<Section>
			<div class="flex flex-col gap-4">
				<p class="text-lg font-bold text-secondary-300">Investir</p>
			</div>
			<div class="flex w-full flex-row gap-8">
				{#each Object.keys(investmentTypes) as key}
					<InvestmentCards
						investmentType={investmentTypes[key]}
						onClick={() => openInvestModal(key)}
					/>
				{/each}
			</div>
		</Section>
		<InvestModal open={investModalOpen} type={selectedInvestmentType} onClose={closeInvestModal} />
	</div>
</Layout>
