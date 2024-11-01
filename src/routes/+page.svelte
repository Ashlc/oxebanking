<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input, Label } from 'flowbite-svelte';
	import OxebankingLogo from '../components/OxebankingLogo.svelte';

	let loginForm: HTMLFormElement;

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log(loginForm.cpf, loginForm.password);
		loginForm.reset();
		goto('/auth/home');
	}

	let forgotPasswordForm: HTMLFormElement;

	function handleForgotPasswordSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log(forgotPasswordForm.cpf);
		forgotPasswordForm.reset();
	}

	function validateCpf(event: FocusEvent) {
		const cpf = (event.target as HTMLInputElement).value;
		if (!/^\d+$/.test(cpf)) console.error('CPF must contain only digits.');
		if (cpf.length !== 11) return;
		const formattedCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		(event.target as HTMLInputElement).value = formattedCpf;
	}

	let forgotPassword = false;
</script>

<div class="h-screen w-screen p-4">
	<div class="flex h-full flex-row gap-4">
		{#if !forgotPassword}
			<div class="flex h-full basis-1/3 flex-col items-center justify-center gap-10">
				<OxebankingLogo width={250} height={80} />
				<form
					class="flex w-1/2 flex-col gap-4"
					id="login-form"
					bind:this={loginForm}
					on:submit={handleSubmit}
				>
					<div>
						<Label>CPF</Label>
						<Input
							type="text"
							required
							minlength={11}
							maxlength={11}
							on:blur={validateCpf}
							size="lg"
						/>
					</div>
					<div>
						<Label>Senha</Label>
						<Input type="password" required size="lg" />
					</div>
					<div class="flex justify-end">
						<Button
							color="light"
							on:click={() => (forgotPassword = true)}
							type="button"
							size="xs"
							class="h-fit w-fit border-none px-3 py-1 text-sm text-secondary-100 transition-all hover:underline"
							aria-label="Esqueci minha senha">Esqueci minha senha</Button
						>
					</div>
					<Button class="mt-4 w-full" type="submit" form="login-form">ENTRAR</Button>
				</form>
				<div class="flex w-1/2 flex-col items-center gap-2">
					<p>Ôxe, tu não tem conta?</p>
					<Button
						class="w-full border-primary-500 text-primary-700"
						color="light"
						on:click={() => goto('/signup')}
					>
						ABRA UMA CONTA OXE
					</Button>
				</div>
			</div>
		{:else}
			<div class="flex h-full basis-1/3 flex-col items-center justify-center gap-10">
				<div class="flex w-1/2 flex-col gap-4">
					<div class="-ml-3">
						<OxebankingLogo height={80} />
					</div>
					<p>Para recuperar sua senha, informe seu CPF e clique em recuperar senha.</p>
				</div>
				<form
					class="flex w-1/2 flex-col gap-4"
					id="forgot-password-form"
					bind:this={forgotPasswordForm}
					on:submit={handleForgotPasswordSubmit}
				>
					<div>
						<Label>CPF</Label>
						<Input type="text" required minlength={11} maxlength={11} on:blur={validateCpf} />
					</div>
					<Button class="mt-4 w-full" type="submit" form="forgot-password-form">
						RECUPERAR SENHA
					</Button>
					<Button color="light" class="border-none" on:click={() => (forgotPassword = false)}
						>VOLTAR</Button
					>
				</form>
			</div>
		{/if}
		<div class="relative h-full basis-2/3 overflow-clip rounded-2xl bg-secondary-200">
			<h2 class="absolute bottom-16 z-10 w-full text-center text-4xl font-bold text-white">
				Do nordeste para o Brasil. <br />
				Há mais de 5 anos.
			</h2>
			<div class="image-1 h-full w-full opacity-40"></div>
		</div>
	</div>
</div>
