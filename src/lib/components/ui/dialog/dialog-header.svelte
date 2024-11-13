<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from 'bits-ui';
	import { cn } from '$lib/index.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'flex w-full flex-col space-y-1.5 border-b border-gray-300 px-12 py-8 text-center sm:text-left',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
