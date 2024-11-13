<script lang="ts">
	import { Input, Label, Select } from 'flowbite-svelte';
	import { onMount } from 'svelte';
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

	// Form de CEP
	const address = $state({
		cep: '',
		municipio: '',
		uf: '',
		logradouro: '',
		numero: '',
		complemento: ''
	});

	$effect(() => {
		if (address.cep.length === 8) {
			fetch(`https://viacep.com.br/ws/${address.cep}/json/`)
				.then((response) => response.json())
				.then((data) => {
					address.municipio = data.localidade;
					address.uf = data.uf;
					address.logradouro = data.logradouro;
				});
		}
	});

	interface UF {
		id: string;
		sigla: string;
		nome: string;
	}

	let ufs = $state<UF[]>([]);

	onMount(async function () {
		const ufs_response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
		const data = (await ufs_response.json()) as UF[];
		console.log(data);
		ufs = data;
	});
</script>

<div class="grid w-full grid-cols-6 gap-2">
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
		<Input type="text" required minlength={8} maxlength={8} bind:value={address.cep} />
	</div>
	<div class="col-span-4 flex flex-col gap-2">
		<Label>Municipio</Label>
		<Input type="text" required bind:value={address.municipio} />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>UF</Label>
		<Select bind:value={address.uf}>
			{#each ufs as uf}
				<option value={uf.sigla}>{uf.sigla}</option>
			{/each}
		</Select>
	</div>
	<div class="col-span-4 flex flex-col gap-2">
		<Label>Logradouro</Label>
		<Input type="text" required bind:value={address.logradouro} />
	</div>
	<div class="col-span-1 flex flex-col gap-2">
		<Label>Número</Label>
		<Input type="text" required bind:value={address.numero} />
	</div>
	<div class="col-span-6 flex flex-col gap-2">
		<Label>Complemento</Label>
		<Input type="text" bind:value={address.complemento} />
	</div>
</div>
