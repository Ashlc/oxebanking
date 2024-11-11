<script lang="ts">
	import Icon from '@iconify/svelte';
	export let label: string;
	export let icon: string;
	export let isActive: boolean = false;
	export let isCompleted: boolean = false;
	export let onClick: () => void;
</script>

<button
	class="flex w-28 flex-col items-center gap-2 text-center"
	on:click={onClick}
	aria-label={label}
>
	<div
		class="flex h-10 w-10 items-center justify-center rounded-full text-white"
		class:bg-slate-200={!isActive && !isCompleted}
		class:bg-primary-700={isActive}
		class:bg-primary-200={isCompleted}
		class:text-white={isActive}
		class:text-primary-700={isCompleted}
		class:text-slate-500={!isActive && !isCompleted}
	>
		<Icon {icon} height="24" />
	</div>
	<p class="text-sm">{label}</p>
</button>
