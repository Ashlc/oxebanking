<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/index.js';

	import X from 'lucide-svelte/icons/x';
	import type { Component } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		icon: CustomIcon,
		action,
		...restProps
	}: DialogPrimitive.TitleProps & {
		icon?: Component | string;
		action?: () => void;
	} = $props();
</script>

<div class="flex w-full flex-row items-center justify-between">
	<button class="flex flex-row items-center justify-center gap-4" onclick={action || undefined}>
		{#if typeof CustomIcon == 'string'}
			<Icon icon={CustomIcon} className="w-7 h-7 text-secondary-400" />
		{:else}
			<CustomIcon className="w-7 h-7 text-secondary-400" />
		{/if}
		<DialogPrimitive.Title
			bind:ref
			class={cn('text-lg font-semibold leading-none tracking-tight', className)}
			{...restProps}
		/>
	</button>
	<DialogPrimitive.Close
		class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
	>
		<X class="size-4" />
		<span class="sr-only">Close</span>
	</DialogPrimitive.Close>
</div>
