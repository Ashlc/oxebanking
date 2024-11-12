<script>
	import ReceiptDeco from '@/assets/receipt-deco.svelte';
</script>

<div class="flex w-full flex-col items-center justify-start gap-9 pb-8">
	<div class="flex w-full flex-col items-center justify-center gap-4 self-stretch">
		<p class="text-2xl font-bold text-secondary-400">Pix enviado</p>
		<p class="text-5xl font-bold text-primary-700">R$ 15,00</p>
	</div>
	<div class="flex flex-col items-start justify-start gap-6 self-stretch">
		<div class="text-base font-bold text-black">Sobre a transação</div>
		<div class="flex w-full flex-col items-start justify-start gap-4">
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Data do pagamento</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">Segunda, 26/08/2024</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Horário</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">13h59</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div
					class="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start gap-1"
				>
					<div class="text-sm font-medium text-secondary-100">Identificador</div>
					<div class="inline-flex items-center justify-center gap-2.5">
						<div class="text-sm font-bold text-secondary-400">
							239847238497234823429347239842234
						</div>
					</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div
					class="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start gap-1"
				>
					<div class="text-sm font-medium text-secondary-100">ID da transação</div>
					<div class="inline-flex items-center justify-center gap-2.5">
						<div class="text-sm font-bold text-secondary-400">
							E0094832742934723847228374H1m2oGPU
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="self-stretch border border-dashed border-secondary-300"></div>
	<div class="flex flex-col items-start justify-start gap-6 self-stretch">
		<div class="text-base font-bold text-black">Quem recebeu</div>
		<div class="flex w-full flex-col items-start justify-start gap-4">
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Nome</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">PagSeguro Tecnologia LTDA</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">CPF/CNPJ</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">06.384.131/0003-62</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Instituição</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">PagSeguro Internet S.A</div>
				</div>
			</div>
		</div>
	</div>
	<div class="self-stretch border border-dashed border-secondary-300"></div>
	<div class="flex flex-col items-start justify-start gap-6 self-stretch">
		<div class="text-base font-bold text-black">Quem pagou</div>
		<div class="flex w-full flex-col items-start justify-start gap-4">
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Nome</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">FERNANDO MARQUES DA SILVA</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">CPF/CNPJ</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">***.124.153-**</div>
				</div>
			</div>
			<div class="inline-flex w-full items-center justify-between">
				<div class="text-sm font-medium text-secondary-100">Instituição</div>
				<div class="flex items-center justify-start gap-2">
					<div class="text-sm font-bold text-secondary-400">Banco OxeBanking S.A.</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <ReceiptDeco class="absolute bottom-0 left-0" />
 -->
