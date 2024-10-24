<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Transaction {
		id: number;
		date: string;
		type: string;
		value: string;
		operation: 'in' | 'out' | 'card';
		agent: string;
	}

	const latestTransactions: Transaction[] = [
		{
			id: 1,
			date: '2021-09-01',
			type: 'pix',
			value: 'R$ 150,00',
			operation: 'out',
			agent: 'João da Silva'
		},
		{
			id: 2,
			date: '2021-09-02',
			type: 'card',
			value: 'R$ 120,00',
			operation: 'card',
			agent: 'Unicompras'
		},
		{
			id: 3,
			date: '2021-09-03',
			type: 'pix',
			value: 'R$ 50,00',
			operation: 'in',
			agent: 'João da Silva'
		},
		{
			id: 4,
			date: '2021-09-04',
			type: 'card',
			value: 'R$ 200,00',
			operation: 'card',
			agent: 'OBoticário'
		}
	];

	// Define an object to hold styles and values based on operation
	const styles = {
		in: {
			bgColor: 'bg-primary-200',
			textColor: 'text-primary-700',
			word: 'de',
			sign: '+'
		},
		out: {
			bgColor: 'bg-red-100',
			textColor: 'text-red-500',
			word: 'para',
			sign: '-'
		},
		card: {
			bgColor: 'bg-slate-100',
			textColor: 'text-slate-500',
			word: 'em',
			sign: ''
		}
	};
</script>

<div>
	<div class="flex flex-col gap-4 rounded-lg border px-4 pb-4">
		<div class="flex flex-row justify-between pb-2 pt-4">
			<div class="flex flex-row items-center gap-2">
				<Icon icon="material-symbols:receipt-long-outline" class="text-secondary-200" height="18" />
				<p class="text-sm text-secondary-200">Ùltimas transações</p>
			</div>
			<button class="flex flex-row items-center gap-2 text-sm text-primary-700 hover:underline"
				>Ver extrato completo <span><Icon icon="ic:chevron-right" height="16" /></span></button
			>
		</div>
		<div class="flex flex-col gap-6">
			{#each latestTransactions as t}
				<div class="flex flex-row items-center gap-3">
					<div
						class={`${styles[t.operation].bgColor} ${styles[t.operation].textColor} aspect-square rounded-lg p-2`}
					>
						<Icon
							icon={t.type === 'pix' ? 'ic:baseline-pix' : 'material-symbols:credit-card'}
							height="24"
						/>
					</div>
					<div>
						<div class="flex flex-row gap-1">
							<p class={`text-sm font-bold ${styles[t.operation].textColor}`}>
								{`${styles[t.operation].sign}${t.value}`}
							</p>
							<p class="text-sm text-secondary-200">{styles[t.operation].word}</p>
							<p class="text-sm text-secondary-500">{t.agent}</p>
						</div>
						<p class="text-sm text-secondary-200">{t.date}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
