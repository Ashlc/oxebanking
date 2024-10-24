<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	export let active: boolean = false;
	export let href: string = '';
</script>

<Button
	color="light"
	on:click={() => goto(href)}
	class={`${active ? 'border bg-white text-primary-700 shadow-md shadow-secondary-200/20' : 'border-none bg-transparent'} w-full justify-start transition-all hover:bg-primary-400`}
>
	<slot />
</Button>
