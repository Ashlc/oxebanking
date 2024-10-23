<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	export let active: boolean = false;
	export let href: string = '';
</script>

<Button
	color="light"
	on:click={() => goto(href)}
	class={`${active ? 'border bg-white text-secondary-400 shadow-md shadow-primary-200/20' : 'border-none bg-transparent'} w-full justify-start transition-all hover:bg-secondary-100`}
>
	<slot />
</Button>
