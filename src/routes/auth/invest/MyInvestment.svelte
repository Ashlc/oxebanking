<script context="module" lang="ts">
	export interface Investment {
		name: string;
		amount: number;
		rentability: number;
	}
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Badge, Button } from 'flowbite-svelte';

	const getRentabilityPercentage = (investment: Investment) => {
		return (investment.rentability / investment.amount) * 100;
	};

	const styles = {
		color: 'text-primary-700',
		icon: 'material-symbols:arrow-upward'
	};

	export let investment: Investment;
</script>

<div class="flex grow flex-col gap-2 rounded-xl border">
	<div class="border-b p-4">
		<p class="font-semibold text-secondary-400">{investment.name}</p>
	</div>
	<div class="flex flex-col gap-2 p-4 text-secondary-300">
		<div class="flex flex-row items-center justify-between text-sm">
			<p class="font-medium">Investimento</p>
			<div class="flex flex-row gap-2">
				<Badge class={`border bg-white`} rounded>
						<Icon icon={styles.icon} class="mb-[1px]" />
						<p class="font-medium">{getRentabilityPercentage(investment).toFixed(2)}%</p>
				</Badge>
				<p class="font-bold">
					{investment.amount.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					})}
				</p>
			</div>
		</div>
		<div class="flex flex-row items-center justify-between text-sm">
			<p class="font-medium">Rendimento</p>
			<p class="font-bold">
				{investment.rentability.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})}
			</p>
		</div>
	</div>
	<div class="border-t p-4">
		<Button color="primary" class="w-full bg-primary-700">Ver detalhes</Button>
	</div>
</div>
