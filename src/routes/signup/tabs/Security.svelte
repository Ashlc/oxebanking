<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-4">
	<h3 class="text-lg font-bold">Escolha uma senha segura</h3>
	<p>Para a sua segurança, escolha uma senha forte e segura que atenda aos seguintes requisitos:</p>
	<ul class="list-inside list-disc">
		<li>Contenha pelo menos uma letra maiúscula;</li>
		<li>Inclua números e símbolos (ex: !, @, #, $, etc.);</li>
		<li>Tenha entre 8 e 16 caracteres;</li>
		<li>Seja única e não utilizada em outros sites ou serviços.</li>
	</ul>
	<p class="font-medium">
		Manter a segurança da sua senha é essencial para proteger sua conta e seus dados. Evite senhas
		comuns ou fáceis de adivinhar.
	</p>
	<p class="font-medium">
		Manter a segurança da sua senha é essencial para proteger sua conta e seus dados. Evite senhas
		comuns ou fáceis de adivinhar.
	</p>
	<div class="flex flex-col gap-2">
		<Label>Senha</Label>
		<Input type="password" required size="lg" />
	</div>
	<div class="flex flex-col gap-2">
		<Label>Confirmar senha</Label>
		<Input type="password" required size="lg" />
	</div>
</div>
