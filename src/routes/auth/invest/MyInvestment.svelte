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
		color: 'text-secondary-400',
		icon: 'material-symbols:arrow-upward'
	};

	export let investment: Investment;
</script>

<div class="flex grow flex-col gap-2 rounded-xl border">
	<div class="border-b p-4">
		<p class="font-semibold text-primary-400">{investment.name}</p>
	</div>
	<div class="flex flex-col gap-2 p-4 text-primary-300">
		<div class="flex flex-row items-center justify-between">
			<p class="font-medium">Valor investido</p>
			<div class="flex flex-row gap-2">
				<Badge class={`gap-1 border bg-white`} rounded>
					<div class={`flex flex-row items-center gap-[2px] ${styles.color}`}>
						<p class="font-semibold">{getRentabilityPercentage(investment).toFixed(2)}%</p>
						<Icon icon={styles.icon} class="mb-[1px]" />
					</div>
				</Badge>
				<p class="font-medium">
					{investment.amount.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					})}
				</p>
			</div>
		</div>
		<div class="flex flex-row items-center justify-between">
			<p class="font-medium">Rendimento</p>
			<p class="font-medium">
				{investment.rentability.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})}
			</p>
		</div>
	</div>
	<div class="border-t p-4">
		<Button color="primary" class="w-full bg-secondary-400">Ver detalhes</Button>
	</div>
</div>
