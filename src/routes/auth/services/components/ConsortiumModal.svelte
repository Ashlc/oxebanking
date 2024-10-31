<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import type { ConsortiumType } from '../../../../types/Consortium';

	export let openModal = false;
	export let onClose: () => void;
	export let title = 'Detalhes do consórcio';
	export let description = 'Descrição do consórcio';
	export let consortium: ConsortiumType | null = null;
</script>

<Modal {title} bind:open={openModal} on:close={onClose} autoclose outsideclose>
	<p>{description}</p>
</Modal>
