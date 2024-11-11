<script lang="ts">
	import { Input } from 'flowbite-svelte';
	export let value: string;
	export let setValue: (value: string) => void;
</script>

<div class="flex w-full flex-col gap-2">
	<p class="font-semibold">Personalizar valor</p>
	<Input type="text" size="lg" bind:value on:input={() => setValue(value)} />
</div>
