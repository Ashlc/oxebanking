<script lang="ts">
	import Icon from '@iconify/svelte';

	interface InvestmentType {
		icon: string;
		name: string;
		description: string;
	}

	export let investmentType: InvestmentType;
	export let onClick: () => void;
</script>

<button
	class="animated-card flex basis-1/4 flex-col gap-4 rounded-xl border p-4 text-justify transition-all ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-400/10"
	on:click={onClick}
>
	<div class="flex flex-row items-center gap-2">
		<div
			class="flex aspect-square h-10 flex-col items-center justify-center rounded-lg bg-primary-200 text-primary-700"
		>
			<Icon icon={investmentType.icon} height={20} />
		</div>
		<p class="font-bold tracking-tight">{investmentType.name}</p>
	</div>
	<p>{investmentType.description}</p>
</button>
