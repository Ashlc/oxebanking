<script lang="ts">
	import StepperItem from './StepperItem.svelte';
	export let currentStep: number;
	export let steps: { index: number; label: string; icon: string }[] = [
		{ index: 1, label: 'Informações pessoais', icon: 'mdi:user-circle-outline' },
		{ index: 2, label: 'Informações de contato', icon: 'mdi:contact-mail-outline' },
		{ index: 3, label: 'Segurança', icon: 'mdi:lock-outline' }
	];
	export let handleStepClick: (index: number) => void;
</script>

<div class="relative">
	<div class="flex w-full flex-row items-start justify-between">
		{#each steps as step}
			<StepperItem
				label={step.label}
				icon={step.icon}
				isActive={step.index === currentStep}
				isCompleted={step.index < currentStep}
				onClick={() => {
					handleStepClick(step.index);
				}}
			/>
			{#if step.index !== steps.length}
				<div class="top-4 h-1 w-full border-b border-dashed border-slate-400 pt-5"></div>
			{/if}
		{/each}
	</div>
</div>
