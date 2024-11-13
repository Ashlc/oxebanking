<script lang="ts">
	import { cn } from '@/lib';
	import Icon from '@iconify/svelte';
	import { Button } from 'flowbite-svelte';

	let {
		isEmpty
	}: {
		isEmpty?: boolean;
	} = $props();
</script>

<div
	class={cn(
		'flex min-h-[24rem] w-[18rem] flex-col items-start justify-start rounded-lg border border-gray-300',
		{
			'items-center justify-center px-8': isEmpty
		}
	)}
>
	{#if isEmpty}
		<Button class="w-full rounded-sm text-base" color="light">Ver todas as faturas</Button>
	{:else}
		<div class="flex w-full flex-col items-start justify-start gap-4 bg-neutral-400 p-6">
			<div class="flex flex-col items-start justify-start gap-4">
				<div class="flex items-center justify-center gap-4">
					<div class="text-lg font-bold text-secondary-300">Outubro</div>
					<div class="flex items-center justify-center gap-1 rounded bg-secondary-400 px-2 py-1.5">
						<div class="text-xs font-bold text-white">Aberta</div>
					</div>
				</div>
				<div class="text-2xl font-normal text-secondary-300">R$ 24,00</div>
			</div>
		</div>
		<div class="flex w-full flex-col items-start justify-start gap-6 p-6">
			<div class="flex items-center justify-center gap-2.5 rounded bg-white">
				<Icon icon="material-symbols:check" />
				<div class="text-center text-sm font-bold text-[#332b2b]">Débito automático ativo</div>
			</div>
			<div class="flex w-full flex-col items-start justify-start gap-3">
				<div class="flex w-full items-center justify-between">
					<div class="text-base font-normal text-secondary-300">Dia de vencimento</div>
					<div class="text-base font-normal text-secondary-300">12/10</div>
				</div>
				<div class="border border-[#eaeaea]"></div>
				<div class="flex w-full items-center justify-between">
					<div class="text-base font-normal text-secondary-300">Melhor dia de compra</div>
					<div class="text-base font-normal text-secondary-300">05/10</div>
				</div>
			</div>
			<div class="flex w-full flex-col items-center justify-start gap-2">
				<Button class="w-full rounded-sm text-base" color="light">Ver despesas</Button>
				<Button class="w-full rounded-sm text-base transition">Antecipar fatura</Button>
			</div>
		</div>
	{/if}
</div>
