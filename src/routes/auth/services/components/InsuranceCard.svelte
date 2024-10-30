<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Insurance } from '../../../../types/Insurance';
	export let insurance: Insurance;

	const { title, icon, description, price } = insurance;
</script>

<button
	class="animated-card flex h-56 basis-1/4 flex-col justify-between gap-3 rounded-xl border p-4 text-left transition-all ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-500/30"
	aria-label={title}
>
	<div class="flex flex-row items-center gap-2">
		<Icon {icon} height="20" />
		<h1 class="font-semibold">{title}</h1>
	</div>
	<p class="grow text-base text-secondary-100">{description}</p>
	<div>
		<p class="text-sm">A partir de</p>
		<p class="text-base font-semibold text-primary-700">
			R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			<span class="text-sm font-normal">/mês</span>
		</p>
	</div>
</button>
