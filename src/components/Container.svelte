<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string = null;
	export let header: string = '';
	export let border = true;
	export let padding = true;
</script>

<div class={`flex flex-col gap-4 rounded-lg ${border ? 'border' : ''}`}>
	<div class={`flex flex-row items-center gap-2 px-4 ${padding ? 'pt-4 ' : ''}`}>
		{#if icon}
			<Icon {icon} class="text-secondary-200" height="18" />
		{/if}
		<p class="text-sm text-secondary-200">{header}</p>
	</div>
	<slot />
</div>
