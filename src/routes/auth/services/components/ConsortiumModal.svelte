<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import Oxe from '../../../../assets/oxe.svg';
	import type { ConsortiumType } from '../../../../types/Consortium';
	export let title = 'Detalhes do consórcio';
	export let description = 'Descrição do consórcio';
	export let consortium: ConsortiumType | null = null;
	export let openModal = false;
	export let onClose: () => void;

	const handleClose = () => {
		onClose();
	};
</script>

<Modal
	title={consortium?.title || title}
	bind:open={openModal}
	on:close={handleClose}
	classHeader="!text-secondary-800"
>
	<div class="flex w-full flex-col gap-4">
		{#if consortium && consortium.contracted}
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<h3 class="text-lg font-semibold text-secondary-400">Sobre o seu plano</h3>
					<ul class="list-inside list-disc text-secondary-300">
						{#if consortium.contractDate}
							<li>Contratado em {new Date(consortium.contractDate).toLocaleDateString('pt-BR')}</li>
						{/if}
						<li>
							Valor da assinatura:
							<span class="font-bold">
								R$
								{consortium.price.toLocaleString('pt-BR', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								})}
							</span>
						</li>
					</ul>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="text-lg font-semibold text-secondary-400">Benefícios</h3>
					<ul class="list-inside list-disc text-secondary-300">
						{#each consortium.description as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<Button class="w-full" color="light" on:click={handleClose}>Consultar apólice</Button>
				<hr class="my-4" />
				<div class="flex flex-col gap-2">
					<Button class="w-full" on:click={handleClose}>Solicitar sinistro</Button>
					<Button
						class="w-full border-none text-rose-700 hover:bg-rose-400/10 hover:text-rose-700"
						color="alternative"
						on:click={handleClose}
					>
						Cancelar seguro
					</Button>
				</div>
			</div>
		{:else if consortium && !consortium.contracted}
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<h3 class="font-semibold text-secondary-400">Forma de pagamento</h3>
					<button
						class="flex flex-row items-center justify-between rounded-lg border p-6"
						type="button"
					>
						<div class="flex flex-row items-center gap-3">
							<img src={Oxe} alt="Oxe" class="-ml-2 h-8" />
							<p class="font-medium text-secondary-400">Débito automático</p>
						</div>
						<Icon icon="mdi:chevron-right" height="24" class="text-primary-600" />
					</button>
				</div>
				<div class="flex flex-row items-center gap-4 rounded-xl bg-neutral-400 p-4">
					<Icon icon="mdi:information-outline" height="24" class="text-secondary-100" />
					<p class="text-secondary-800">
						Ao contratar o seguro, você concorda com os
						<a href="/termos-de-uso" class="underline">Termos e Condições</a>.
					</p>
				</div>
				<div class="flex flex-row gap-4">
					<Button class="w-full" color="light" on:click={handleClose}>Cancelar</Button>
					<Button class="w-full" on:click={handleClose}>Contratar seguro</Button>
				</div>
			</div>
		{/if}
	</div>
</Modal>
