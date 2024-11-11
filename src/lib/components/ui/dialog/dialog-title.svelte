<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/index.js';

	import X from 'lucide-svelte/icons/x';

	let {
		ref = $bindable(null),
		class: className,
		icon: Icon,
		...restProps
	}: DialogPrimitive.TitleProps & {
		icon?: any;
	} = $props();
</script>

<div class="flex w-full flex-row items-center justify-between">
	<div class="flex flex-row items-center justify-center gap-4">
		{#if Icon}
			<Icon className="w-7 h-7 text-secondary-400" />
		{/if}
		<DialogPrimitive.Title
			bind:ref
			class={cn('text-lg font-semibold leading-none tracking-tight', className)}
			{...restProps}
		/>
	</div>
	<DialogPrimitive.Close
		class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
	>
		<X class="size-4" />
		<span class="sr-only">Close</span>
	</DialogPrimitive.Close>
</div>
