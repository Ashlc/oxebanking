<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Badge } from 'flowbite-svelte';
	import Layout from '../../../components/Layout.svelte';
	import Graph from './Graph.svelte';
	let balance = 34245.23;

	interface Rentability {
		value: number;
		style: 'positive' | 'negative';
	}

	const rentability: Rentability = {
		value: 135.23,
		style: 'positive'
	};

	let formattedBalance = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	let formattedRentability = rentability.value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});

	const styles = {
		positive: {
			color: 'text-secondary-500',
			icon: 'material-symbols:arrow-upward'
		},
		negative: {
			color: 'text-red-500',
			icon: 'material-symbols:arrow-downward'
		}
	};
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Investimentos']}>
	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-3">
			<div class="flex flex-row items-center gap-4 text-primary-100">
				<Icon icon="material-symbols:trending-up" height="16" />
				<p class="font-semibold text-primary-200">Carteira de investimentos</p>
			</div>
			<div class="flex flex-row items-center gap-4">
				<p class="w-fit text-4xl font-bold text-primary-500">{formattedBalance}</p>
				<Badge large class={`gap-1 border bg-white`} rounded>
					<div class={`flex flex-row items-center gap-[2px] ${styles[rentability.style].color}`}>
						<p class="font-semibold">{formattedRentability}</p>
						<Icon icon={styles[rentability.style].icon} class="mb-[1px]" />
					</div>
					<span>de rendimento</span>
				</Badge>
			</div>
		</div>
		<div class="flex flex-row gap-8">
			<div class="flex basis-3/4 flex-col gap-12">
				<Graph />
			</div>
			<div class="flex basis-1/4 flex-col"></div>
		</div>
	</div></Layout
>
