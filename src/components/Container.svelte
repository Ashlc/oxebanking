<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string | null = null;
	export let header: string = '';
	export let border = true;
	export let className: string = '';
</script>

<div class={`flex flex-col gap-4 rounded-lg py-6 ${border ? 'border' : ''} ${className}`}>
	<div class={`flex flex-row items-center gap-2 px-9`}>
		{#if icon}
			<Icon {icon} class="text-secondary-200" height="18" />
		{/if}
		<p class="text-sm text-secondary-200">{header}</p>
	</div>
	<slot />
</div>
