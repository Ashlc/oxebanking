<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	export let active: boolean = false;
	export let href: string = '';
</script>

<Button
	color="alternative"
	on:click={() => goto(href)}
	class={`${active ? 'border bg-white text-primary-700 shadow-md shadow-neutral-300' : 'border-none bg-transparent'} w-full justify-start transition-all hover:bg-primary-400 hover:text-primary-900`}
>
	<slot />
</Button>
