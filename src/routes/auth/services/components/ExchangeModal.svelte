<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	export let openModal = false;
	export let onClose: () => void;
	export let title = 'Detalhes do câmbio	';
	export let description = 'Descrição do câmbio';
</script>

<Modal {title} bind:open={openModal} on:close={onClose} autoclose outsideclose>
	<p>{description}</p>
</Modal>
