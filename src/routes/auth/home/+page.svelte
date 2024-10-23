<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Badge, Button } from 'flowbite-svelte';
	import Container from '../../../components/Container.svelte';
	import Layout from '../../../components/Layout.svelte';
	import LatestTransactions from './LatestTransactions.svelte';

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
			label: 'Pix'
		},
		{
			icon: 'material-symbols:credit-card',
			label: 'Cartões'
		},
		{
			icon: 'material-symbols:barcode',
			label: 'Pagar'
		},
		{
			icon: 'material-symbols:send-money',
			label: 'Transferir'
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
            value: "R$ 150,00"
        },
        {
            category: 'Alimentação',
            icon: 'material-symbols:restaurant',
            value: "R$ 120,00"
        },
        {
            category: 'Transporte',
            icon: 'material-symbols:directions-bus',
            value: "R$ 50,00"
        },
        {
            category: 'Lazer',
            icon: 'material-symbols:movie',
            value: "R$ 80,00"
        }
    ];

</script>

<Layout root="Início" startIcon="ic:outline-explore">
	<div class="flex flex-row gap-6">
		<div class="flex basis-1/2 flex-col gap-6">
			<Container header="Saldo" icon="ic:outline-account-balance-wallet">
				<div class="flex flex-row items-center gap-3 px-4 pb-4">
					{#if visible}
						<p class="w-full text-4xl font-bold text-primary-500">{formattedBalance}</p>
					{:else}
						<div class="h-10 w-full rounded-lg bg-neutral-200" />
					{/if}
					<Button color="light" size="sm" on:click={toggleVisibility} class="aspect-square p-2">
						<Icon icon={visibleIcon} height="20" />
					</Button>
				</div>
				<hr />
				<Container header="Acesso rápido" border={false} padding={false}>
					<div class="flex w-full flex-row gap-10 px-4 pb-4">
						{#each quickActions as action}
							<div class="flex flex-col items-center gap-1">
								<Button
									color="primary"
									class="aspect-square bg-neutral-400 p-4 text-primary-400 transition-all hover:bg-neutral-500 active:bg-neutral-200"
								>
									<Icon icon={action.icon} height="24" />
								</Button>
								<p class="text-sm">{action.label}</p>
							</div>
						{/each}
					</div>
				</Container>
			</Container>
			<Container header="Sua fatura" icon="mdi:credit-card-outline">
				<div class="flex flex-col gap-3 px-4 pb-4">
					<p class="w-full text-4xl font-bold text-primary-500">R$ 140,37</p>
					<div class="flex flex-row gap-3">
						<p class="text-primary-200">Vence 14/11</p>
						<Badge class="gap-2 border border-secondary-200 bg-secondary-100 text-secondary-500">
                            <Icon icon="material-symbols:check" />
                            Débito automático ativo
                        </Badge>
					</div>
				</div>
			</Container>
			<Container header="Principais gastos este mês" icon="material-symbols:calendar-month-outline">
                <div class="flex flex-row flex-wrap gap-4 px-4 pb-4">
				{#each spendings as spending}
                    <div class="flex w-44 flex-col gap-4 rounded-lg bg-neutral-400 p-4">
                        <Badge class="w-fit gap-2 order border-neutral-300 bg-neutral-100 py-1">
                            <Icon icon={spending.icon} height="16" />
                            {spending.category}
                        </Badge>
                        <p class="text-2xl font-semibold">{spending.value}</p>
                        <Button class="w-full bg-white p-2 text-primary-400 transition-all hover:bg-neutral-200 active:bg-neutral-100">
                            Ver detalhes
                        </Button>
                    </div>
                    {/each}
                </div>
			</Container>
		</div>
		<div class="flex basis-1/2 flex-col">
        <LatestTransactions/>
        </div>
	</div>
</Layout>
