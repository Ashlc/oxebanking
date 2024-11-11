<script lang="ts">
	import { Input, Label, Select } from 'flowbite-svelte';
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

<div class="grid w-full grid-cols-2 gap-8">
	<div class="col-span-2 flex flex-col gap-2">
		<Label>Nome completo</Label>
		<Input type="text" required />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>CPF</Label>
		<Input type="text" required minlength={11} maxlength={11} />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>Data de nascimento</Label>
		<Input type="date" required />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>Estado civil</Label>
		<Select items={maritalStatus} required placeholder="" />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>Renda mensal bruta</Label>
		<Select items={income} required placeholder="" />
	</div>
</div>
