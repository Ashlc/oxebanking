<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup, Input, Label, Select } from 'flowbite-svelte';
	import Container from '../../../components/Container.svelte';
	import Layout from '../../../components/Layout.svelte';

	type LoanType = 'personal' | 'consortium' | 'realEstate';
	type Installments = '6' | '12' | '24' | '36' | '48';
	type Rates = {
		[Key in LoanType]: { [Installment in Installments]: number };
	};

	interface SimulationLoan {
		amount: number;
		installments: Installments;
		installmentValue: number;
		totalValue: number;
	}

	let simulationLoan: SimulationLoan = {
		amount: 0,
		installments: '6',
		installmentValue: 0,
		totalValue: 0
	};

	const rates: Rates = {
		personal: {
			6: 3.8,
			12: 3.6,
			24: 3.9,
			36: 4.2,
			48: 4.5
		},
		consortium: {
			6: 2.3,
			12: 2.4,
			24: 2.6,
			36: 2.8,
			48: 3.0
		},
		realEstate: {
			6: 1.4,
			12: 1.5,
			24: 1.7,
			36: 1.8,
			48: 2.0
		}
	};

	const userActiveLoan = {
		amount: 10000,
		installments: 10,
		installmentValue: 1200,
		interestRate: 3.5
	};

	const creditScore = 700;

	const loanHistory = [
		{ amount: 10000, installments: 10, installmentValue: 1200, interestRate: 3.5 },
		{ amount: 20000, installments: 20, installmentValue: 2400, interestRate: 2.5 },
		{ amount: 30000, installments: 30, installmentValue: 3600, interestRate: 1.5 }
	];

	let selectedRate: 'personal' | 'consortium' | 'realEstate' = 'personal';

	const calculateInstallmentValue = (
		amount: number,
		installments: number,
		interestRate: number
	) => {
		return (
			(amount * (interestRate / 100) * (1 + interestRate / 100) ** installments) /
			((1 + interestRate / 100) ** installments - 1)
		);
	};

	const simulateLoan = () => {
		const { amount, installments } = simulationLoan;
		const interestRateDecimal = rates[selectedRate][installments] / 100;
		const installmentValue =
			(amount * interestRateDecimal * (1 + interestRateDecimal) ** Number(installments)) /
			((1 + interestRateDecimal) ** Number(installments) - 1);
		simulationLoan.totalValue = installmentValue * Number(installments);
		simulationLoan.installmentValue = installmentValue;
	};

	const handleClick = (value: LoanType) => {
		selectedRate = value;
		simulateLoan();
	};
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Empréstimos']}>
	<div class="flex w-full flex-col gap-8">
		<div class="flex flex-row items-center gap-8">
			<Container header="Seu score" className="w-fit" icon="material-symbols:credit-score-outline">
				<div class="w-fit px-16 pb-8 text-4xl font-bold text-primary-700">{creditScore}</div>
			</Container>
			<div class="flex flex-col gap-4">
				<div class="flex flex-row items-center gap-2 text-primary-700">
					<Icon icon="mdi:information-outline" height="1.25rem" class="mb-0.5" />
					<h2 class="text-xl font-medium">Saiba mais sobre como melhorar seu score:</h2>
				</div>
				<ul class="list-inside list-decimal columns-2 text-secondary-300">
					<li>Pague suas contas em dia</li>
					<li>Evite utilizar todo o limite de crédito disponível</li>
					<li>Monitore seu CPF regularmente para evitar fraudes</li>
					<li>Não solicite muitos créditos em curto espaço de tempo</li>
				</ul>
			</div>
		</div>
		<div class="flex w-full flex-row gap-12">
			<Container
				header="Empréstimo Ativo"
				icon="material-symbols:attach-money"
				className="basis-1/3 justify-between"
			>
				<div class="flex w-full flex-col gap-6 px-4">
					<div class="flex w-full grow flex-col items-center gap-2 rounded-lg border p-4">
						<p class="text-4xl font-bold text-primary-700">
							R$ {userActiveLoan.amount.toLocaleString('pt-BR', {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})}
						</p>
					</div>
					<ul class="list-inside list-none space-y-1 text-sm text-secondary-300">
						<li>
							<span class="font-semibold">Taxa de Juros:</span>
							{userActiveLoan.interestRate}% a.m
						</li>
						<li>
							<span class="font-semibold">Parcelas Restantes:</span>
							{userActiveLoan.installments}
						</li>
						<li>
							<span class="font-semibold">Valor da Parcela:</span> R$ {userActiveLoan.installmentValue.toLocaleString(
								'pt-BR',
								{
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								}
							)}
						</li>
						<li>Quitação prevista para 01/01/2024</li>
						<li>
							<a href="#" class="flex flex-row items-center gap-2 text-primary-700 underline">
								Contrato <Icon icon="mdi:external-link" height="1rem" />
							</a>
						</li>
					</ul>
				</div>
				<div class="border-t p-4">
					<ButtonGroup class="w-full">
						<Button color="primary" class="w-full border-r transition-all">Pagar Parcela</Button>
						<Button color="primary" class="w-full transition-all">Antecipar Empréstimo</Button>
					</ButtonGroup>
				</div>
			</Container>
			<Container
				header="Simular Empréstimo"
				icon="mdi:hand-coin-outline"
				className="grow justify-between"
			>
				<form class="flex grow flex-col justify-between gap-6 border-t p-4">
					<ButtonGroup class="w-full transition-all">
						<Button
							on:click={() => handleClick('personal')}
							class={`grow text-secondary-300 ${selectedRate === 'personal' ? 'bg-primary-200 hover:bg-primary-300 focus:ring-primary-200' : ''}`}
							color="light"
						>
							Empréstimo Pessoal
						</Button>
						<Button
							on:click={() => handleClick('consortium')}
							color="light"
							class={`grow text-secondary-300 ${selectedRate === 'consortium' ? 'bg-primary-200 hover:bg-primary-300 focus:ring-primary-200' : ''}`}
						>
							Empréstimo Consorciado
						</Button>
						<Button
							on:click={() => handleClick('realEstate')}
							color="light"
							class={`grow text-secondary-300 ${selectedRate === 'realEstate' ? 'bg-primary-200 hover:bg-primary-300 focus:ring-primary-200' : ''}`}
						>
							Empréstimo Imobiliário
						</Button>
					</ButtonGroup>
					<div class="flex flex-row gap-4">
						<div class="basis-2/3 space-y-1">
							<Label>Quanto você precisa? (R$)</Label>
							<Input
								type="number"
								placeholder="Digite o valor desejado"
								size="lg"
								bind:value={simulationLoan.amount}
							/>
						</div>
						<div class="grow space-y-1">
							<Label>Em quantos meses?</Label>
							<Select
								items={[
									{ name: '6 meses', value: '6' },
									{ name: '12 meses', value: '12' },
									{ name: '24 meses', value: '24' },
									{ name: '36 meses', value: '36' },
									{ name: '48 meses', value: '48' }
								]}
								size="lg"
								on:change={() => simulateLoan()}
								bind:value={simulationLoan.installments}
							/>
						</div>
					</div>
					<Button
						class="w-full border-primary-700 text-primary-700 transition-all hover:bg-primary-700 hover:text-white"
						color="light"
						on:click={simulateLoan}
					>
						Simular Empréstimo
					</Button>
				</form>
				<div class="h-24 border-t p-4">
					{#if simulationLoan.installmentValue > 0}
						<div class="flex flex-row justify-between">
							<p class="text-3xl font-bold text-primary-700">
								<span class="text-lg font-normal text-neutral-600"
									>{simulationLoan.installments}X de
								</span>
								R$ {simulationLoan.installmentValue.toLocaleString('pt-BR', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								})}
								<span class="text-base font-normal text-neutral-600">
									({rates[selectedRate][simulationLoan.installments].toLocaleString('pt-BR', {
										minimumFractionDigits: 1,
										maximumFractionDigits: 2
									})}% a.m)</span
								>
							</p>
							<Button pill class="transition-all">Solicitar Empréstimo</Button>
						</div>
						<p class="text-sm text-neutral-600">
							O valor líquido do empréstimo será de R$ {simulationLoan.totalValue.toLocaleString(
								'pt-BR',
								{
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								}
							)}
						</p>
					{/if}
				</div>
			</Container>
		</div>
	</div>
</Layout>
