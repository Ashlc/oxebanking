<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';
	const maritalStatus = [
		{
			value: 'married',
			name: 'Casado'
		},
		{
			value: 'single',
			name: 'Solteiro'
		},
		{
			value: 'divorced',
			name: 'Divorciado'
		},
		{
			value: 'widowed',
			name: 'Viúvo'
		}
	];

	const income = [
		{
			value: 'low',
			name: 'Até R$ 2.500'
		},
		{
			value: 'medium',
			name: 'Entre R$ 2.500 e R$ 5.000'
		},
		{
			value: 'high',
			name: 'Acima de R$ 5.000'
		}
	];
</script>

<div class="grid w-full grid-cols-6 gap-8">
	<div class="col-span-3 flex flex-col gap-2">
		<Label>Email</Label>
		<Input type="email" required />
	</div>
	<div class="col-span-3 flex flex-col gap-2">
		<Label>Telefone</Label>
		<Input type="tel" required minlength={11} maxlength={11} />
	</div>
	<div class="col-span-2 flex flex-col gap-2">
		<Label>CEP</Label>
		<Input type="text" required minlength={8} maxlength={8} />
	</div>
	<div class="col-span-4 flex flex-col gap-2">
		<Label>Municipio</Label>
		<Input type="text" required />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>UF</Label>
		<Input type="text" required />
	</div>
	<div class="col-span-4 flex flex-col gap-2">
		<Label>Logradouro</Label>
		<Input type="text" required />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>Número</Label>
		<Input type="text" required />
	</div>
	<div class="col-span-6 flex flex-col gap-2">
		<Label>Complemento</Label>
		<Input type="text" />
	</div>
</div>
