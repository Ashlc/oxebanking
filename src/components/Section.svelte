<script lang="ts">
	export let gap = 2;
	export let flex: string = 'flex-col';
	export let classNames: string = '';
</script>

<div class={`flex ${flex} gap-${gap} ${classNames}`}>
	<slot />
</div>
