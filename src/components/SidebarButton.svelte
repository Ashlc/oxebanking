<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	export let active: boolean = false;
	export let href: string = '';
</script>

<Button
	color="light"
	on:click={() => goto(href)}
	class={`${active ? 'border border-neutral-300 bg-white text-primary-700 shadow-md shadow-neutral-400/50' : 'border-none bg-transparent'} w-full justify-start transition-all hover:bg-primary-200 hover:text-primary-900 focus:ring-primary-200`}
>
	<slot />
</Button>
