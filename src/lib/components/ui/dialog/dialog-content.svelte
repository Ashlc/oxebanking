<script lang="ts">
	import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import * as Dialog from './index.js';
	import { cn } from '$lib/index.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		children: Snippet;
	} = $props();
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		bind:ref
		class={cn(
			'fixed left-[50%] top-[50%] z-50 grid max-h-[90vh] w-full max-w-xl translate-x-[-50%] translate-y-[-50%] gap-9 overflow-y-auto overflow-x-hidden border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</DialogPrimitive.Content>
</Dialog.Portal>
