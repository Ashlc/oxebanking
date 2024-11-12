<script lang="ts">
	import Layout from '@/components/Layout.svelte';
	import Title from './components/Title.svelte';
	import { Button } from 'flowbite-svelte';
	import Receipt from './components/Receipt.svelte';
	import Icon from '@iconify/svelte';
</script>

<Layout
	root="Início"
	breadcrumbItems={[
		{
			name: 'Cartões',
			href: '/auth/cards'
		}
	]}
	startIcon="ic:outline-explore"
>
	<div class="flex w-full items-start justify-start gap-9">
		<div class="flex w-full flex-col items-start justify-start gap-4">
			<Title title="Limite" />
			<div class="relative flex w-full flex-col items-start justify-start">
				<div class="relative h-4 w-full rounded-full bg-[#eaeaea]"></div>
				<div class="bg-primtext-primary-500 absolute left-0 top-0 h-4 w-3/4 rounded-full"></div>
			</div>
			<div class="flex w-full items-center justify-between">
				<div class="flex flex-col items-start justify-start gap-0">
					<div class="text-large font-medium text-[#332b2b]">R$ 435,00</div>
					<div class="text-base font-normal text-[#53443e]">Utilizado</div>
				</div>
				<div class="flex flex-col items-center justify-start gap-0">
					<div class="text-large font-medium text-[#332b2b]">R$ 115</div>
					<div class="text-center text-base font-normal text-[#53443e]">Disponível</div>
				</div>
				<div class="flex flex-col items-end justify-start gap-0">
					<div class="text-large text-right font-medium text-[#332b2b]">R$ 550</div>
					<div class="text-right text-base font-normal text-[#53443e]">Total</div>
				</div>
			</div>
		</div>
		<div class="flex w-2/4 flex-col items-start justify-start gap-4 rounded-md bg-[#ecdbca] p-6">
			<div class="text-large self-stretch font-bold text-[#53443e]">
				Precisando aumentar seu limite?
			</div>
			<Button
				color="light"
				class="bg-neutral-200 text-secondary-400 transition hover:bg-neutral-300"
				>Solicitar análise de crédito</Button
			>
		</div>
	</div>
	<!-- Colunas esquerda e direita -->
	<div class="flex w-full items-start justify-between gap-6">
		<!-- Esquerda -->
		<div class="flex-col items-start justify-start gap-9">
			<!-- Faturas -->
			<div class="flex flex-col items-start justify-start gap-9">
				<Title title="Faturas" />
				<div class="flex items-start justify-start gap-4">
					<Receipt />
					<Receipt isEmpty />
				</div>
			</div>
			<!-- Cartões -->
			<!-- <div class="flex flex-col items-start justify-start gap-9">
				<Title title="Cartões" />
				<div class="relative bg-gradient-to-l from-white to-white"></div>
				<div class="flex items-start justify-start gap-4">
					<div class="flex flex-col items-end justify-end gap-4">
						<div
							class="rounded-2large flex flex-col items-start justify-start gap-1 bg-[#ecdbca] p-9"
						>
							<div class="flex flex-col items-center justify-between pb-24">
								<div class="flex items-center justify-end">
									<img class="" src="https://via.placeholder.com/24x31" />
								</div>
								<div class="flex items-center justify-start gap-3 rounded py-3">
									<div class="text-center text-base font-medium text-[#332b2b]">
										FERNANDO MARQUES
									</div>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<div class="text-base font-bold text-black">⋅⋅⋅⋅ 2471</div>
								<div class="relative"></div>
							</div>
						</div>
					</div>

				</div>
			</div> -->
		</div>
		<!-- Direita -->
		<div class="flex flex-col items-start justify-start gap-6">
			<div class="flex flex-col items-start justify-center gap-8">
				<div class="flex w-full flex-col items-start justify-start gap-4">
					<div class="text-lg font-bold text-[#332b2b]">Cartão</div>
					<Button
						color="light"
						class="w-full justify-start gap-4 rounded-sm bg-neutral-500 text-base hover:bg-neutral-400"
					>
						<Icon icon="mdi:eye-outline" />
						Ver senha do cartão
					</Button>
					<Button
						color="light"
						class="w-full justify-start gap-4 rounded-sm bg-neutral-500 text-base hover:bg-neutral-400"
					>
						<Icon icon="mdi:edit-outline" />
						Alterar senha do cartão
					</Button>
				</div>
				<div class="flex w-full flex-col items-start justify-start gap-4">
					<div class="text-lg font-bold text-[#332b2b]">Limite</div>
					<Button
						color="light"
						class="w-full justify-start gap-4 rounded-sm bg-neutral-500 text-base hover:bg-neutral-400"
					>
						<Icon icon="mdi:settings-outline" />
						Ajuste de limite</Button
					>
				</div>
				<div class="flex flex-col items-start justify-start gap-4">
					<div class="text-lg font-bold text-[#332b2b]">Fatura</div>
					<Button
						color="light"
						class="w-full justify-start gap-4 rounded-sm bg-neutral-500 text-base hover:bg-neutral-400"
					>
						<Icon icon="mdi:calendar" />
						Alterar data de vencimento</Button
					>
					<Button
						color="light"
						class="w-full justify-start gap-4 rounded-sm bg-neutral-500 text-base hover:bg-neutral-400"
					>
						<Icon icon="ph:path" />
						Desativar débito automático</Button
					>
				</div>
			</div>
			<div class="flex flex-col items-start justify-start gap-4">
				<div class="text-lg font-medium text-black">Procurando outra coisa?</div>
				<div class="flex flex-col items-start justify-start gap-4">
					<a href="/" class="text-base font-bold text-primary-500 underline">Cartão Global</a>
					<a href="/" class="text-base font-bold text-primary-500 underline"
						>Antecipação de parcelas</a
					>
				</div>
			</div>
		</div>
	</div>
</Layout>
