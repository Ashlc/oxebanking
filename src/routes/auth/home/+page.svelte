<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Badge, Button } from 'flowbite-svelte';
	import Container from '../../../components/Container.svelte';
	import Layout from '../../../components/Layout.svelte';
	import LatestTransactions from './LatestTransactions.svelte';
	import SubContainer from '../../../components/SubContainer.svelte';

	let visible = true;
	let visibleIcon = 'mdi:eye-off-outline';
	let balance = 34245.23;

	let formattedBalance = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

	const toggleVisibility = () => {
		visible = !visible;
		if (visible) {
			visibleIcon = 'mdi:eye-off-outline';
		} else {
			visibleIcon = 'mdi:eye-outline';
		}
	};

	const quickActions = [
		{
			icon: 'ic:baseline-pix',
			label: 'Pix',
			href: '/auth/transactions'
		},
		{
			icon: 'material-symbols:credit-card',
			label: 'Cartões',
			href: '/auth/cards'
		},
		{
			icon: 'material-symbols:barcode',
			label: 'Pagar',
			href: '/auth/transactions'
		},
		{
			icon: 'material-symbols:send-money',
			label: 'Transferir',
			href: '/auth/transactions'
		},
		{
			icon: 'material-symbols:place-item',
			label: 'Depositar'
		}
	];

	const spendings = [
		{
			category: 'Compras',
			icon: 'material-symbols:shopping-bag-outline',
			value: 'R$ 150,00'
		},
		{
			category: 'Alimentação',
			icon: 'material-symbols:restaurant',
			value: 'R$ 120,00'
		},
		{
			category: 'Transporte',
			icon: 'material-symbols:directions-bus',
			value: 'R$ 50,00'
		},
		{
			category: 'Lazer',
			icon: 'material-symbols:movie',
			value: 'R$ 80,00'
		}
	];
</script>

<Layout root="Início" startIcon="ic:outline-explore">
	<div class="flex flex-row gap-6">
		<div class="flex basis-1/2 flex-col gap-6">
			<Container header="Saldo" icon="ic:outline-account-balance-wallet">
				<SubContainer className="flex flex-row items-center gap-3">
					{#if visible}
						<p class="text-4xl font-bold text-secondary-500">{formattedBalance}</p>
					{:else}
						<div class="h-10 w-56 rounded-lg bg-neutral-200"></div>
					{/if}
					<Button color="light" size="sm" on:click={toggleVisibility} class="aspect-square p-2">
						<Icon icon={visibleIcon} height="20" />
					</Button>
				</SubContainer>
				<hr />
				<SubContainer header="Acesso rápido">
					<div class="flex w-full flex-row gap-10">
						{#each quickActions as action}
							<div class="flex flex-col items-center gap-1">
								<a href={action.href}>
									<Button
										color="primary"
										class="aspect-square bg-neutral-400 p-4 text-secondary-400 transition-all hover:bg-neutral-500 active:bg-neutral-200"
									>
										<Icon icon={action.icon} height="24" />
									</Button>
								</a>
								<p class="text-sm">{action.label}</p>
							</div>
						{/each}
					</div>
				</SubContainer>
			</Container>
			<Container header="Sua fatura" icon="mdi:credit-card-outline">
				<SubContainer>
					<p class="w-full text-4xl font-bold text-secondary-500">R$ 140,37</p>
					<div class="flex flex-row gap-4">
						<p class="text-secondary-200">Vence 14/11</p>
						<Badge color="primary" class="gap-2" border>
							<Icon icon="material-symbols:check" />
							Débito automático ativo
						</Badge>
					</div>
				</SubContainer>
			</Container>
			<Container header="Principais gastos este mês" icon="material-symbols:calendar-month-outline">
				<SubContainer className="flex flex-row flex-wrap gap-4">
					{#each spendings as spending}
						<div class="flex w-44 flex-col gap-4 rounded-lg bg-neutral-400 p-4">
							<Badge class="order w-fit gap-2 border-neutral-300 bg-neutral-100 py-1">
								<Icon icon={spending.icon} height="16" class="text-secondary-100" />
								{spending.category}
							</Badge>
							<p class="text-2xl font-semibold">{spending.value}</p>
							<Button
								class="w-full bg-white p-2 text-secondary-400 transition-all hover:bg-neutral-200 active:bg-neutral-100"
							>
								Ver detalhes
							</Button>
						</div>
					{/each}
				</SubContainer>
			</Container>
		</div>
		<div class="flex basis-1/2 flex-col">
			<LatestTransactions />
		</div>
	</div>
</Layout>
