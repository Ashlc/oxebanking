<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		Button,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	export let key: string;
	export let setKey: (key: string) => void;
	export let favorites: { name: string; key: string }[] = [];
	const handleSelectKey = (selectedKey: string) => {
		key = selectedKey;
		setKey(selectedKey);
	};
</script>

<div class="flex w-full flex-col gap-2">
	<p class="font-semibold">Para quem você deseja pagar?</p>
	<Input type="text" size="lg" bind:value={key} on:input={() => setKey(key)} />
</div>
<div class="flex w-full flex-col gap-2">
	<p class="font-semibold">Favoritos</p>
	<div class="overflow-clip rounded-lg border">
		<Table>
			<TableHead class="bg-primary-300">
				<TableHeadCell>Nome</TableHeadCell>
				<TableHeadCell>Chave</TableHeadCell>
				<TableHeadCell class="text-right">Selecionar</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each favorites as favorite}
					<TableBodyRow>
						<TableBodyCell>{favorite.name}</TableBodyCell>
						<TableBodyCell>{favorite.key}</TableBodyCell>
						<TableBodyCell class="pr-[42px] text-right">
							<Button
								color="alternative"
								pill
								class="aspect-square p-2"
								on:click={() => handleSelectKey(favorite.key)}
							>
								<Icon icon="ic:outline-chevron-right" height="20" />
							</Button>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>
