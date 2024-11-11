<script lang="ts">
	import { cn } from '$lib';

	export let header: string = '';
	export let className: string = '';
</script>

<div class={cn('flex flex-col items-start justify-start gap-4 px-9', className)}>
	{#if header}
		<p class="text-sm text-secondary-200">{header}</p>
	{/if}
	<slot />
</div>
