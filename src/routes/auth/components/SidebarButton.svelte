<script lang="ts">
    import { Button } from 'flowbite-svelte';
    export let active: boolean = false;
</script>

<Button color="light" class={`${active ? 'bg-white text-secondary-400 border shadow-md shadow-primary-200/20' : 'bg-transparent border-none'} hover:bg-neutral-300 transition-all justify-start w-full`}><slot/></Button>
