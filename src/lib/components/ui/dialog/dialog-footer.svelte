<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
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
		'flex w-full flex-col-reverse px-12 pb-12 sm:flex-row sm:justify-end sm:space-x-2',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
