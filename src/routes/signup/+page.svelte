<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import OxebankingLogo from '../../components/OxebankingLogo.svelte';
	import Stepper from '../../components/Stepper.svelte';
	import ContactInformation from './tabs/ContactInfo.svelte';
	import PersonalInformation from './tabs/PersonalInfo.svelte';
	import Security from './tabs/Security.svelte';
	let currentStep = 1;
	let steps = [
		{ index: 1, label: 'Informações pessoais', icon: 'mdi:user-circle-outline' },
		{ index: 2, label: 'Informações de contato', icon: 'mdi:contact-mail-outline' },
		{ index: 3, label: 'Segurança', icon: 'mdi:lock-outline' }
	];

	let signupForm: HTMLFormElement;

	const handleContinue = () => {
		if (currentStep < steps.length) {
			currentStep++;
		} else {
			signupForm.submit();
		}
	};

	const handleStepClick = (index: number) => {
		currentStep = index;
	};

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault(); // Prevents the default form submission behavior
		const formData = new FormData(event.target as HTMLFormElement); // Collects form data
		console.log(Object.fromEntries(formData)); // Logs the form data as an object
	};
</script>

<div class="relative h-screen w-screen overflow-clip bg-secondary-200">
	<div class="image-1 h-full w-full opacity-40"></div>
	<div
		class="absolute left-1/2 top-1/2 h-screen w-10/12 -translate-x-1/2 -translate-y-1/2 px-48 py-24"
	>
		<div class="flex h-full w-full flex-row gap-16 rounded-xl bg-white p-16">
			<div class="flex h-full w-[480px] flex-col justify-center gap-8">
				<div class="-ml-4">
					<OxebankingLogo height={52} />
				</div>
				<div class="flex w-full flex-col">
					<h2 class="mb-3 text-3xl font-bold">Abrir uma conta</h2>
					<p class="text-secondary-200">
						Você está a poucos passos de dar início à sua jornada de economia e controle financeiro
						com o OxeBanking.
					</p>
				</div>
			</div>
			<div class="flex h-full w-full flex-col justify-between">
				<Stepper {currentStep} {steps} {handleStepClick} />
				<form id="signup-form" class="w-full" bind:this={signupForm} on:submit={handleSubmit}>
					{#if currentStep === 1}
						<PersonalInformation />
					{:else if currentStep === 2}
						<ContactInformation />
					{:else if currentStep === 3}
						<Security />
					{/if}
				</form>
				<Button class="w-full" type="button" on:click={handleContinue} form="signup-form">
					CONTINUAR
				</Button>
			</div>
		</div>
	</div>
</div>
