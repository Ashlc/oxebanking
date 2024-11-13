<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Breadcrumb, BreadcrumbItem, Dropdown, DropdownItem } from 'flowbite-svelte';
	export let breadcrumbItems: {
		name: string;
		href: string;
	}[] = [];
	export let root: string = '';
	export let startIcon: string = '';
	export let user = { name: 'Fernando Marques' };
	export let expiry = '10 min';
</script>

<div class="flex h-full w-full flex-col rounded-xl border bg-white">
	<div class="flex h-[105px] flex-row items-center justify-between border-b px-10">
		<Breadcrumb>
			<BreadcrumbItem href="/auth/home" home>
				<Icon icon={startIcon} height="20" class="mr-2" slot="icon" />
				{root}
			</BreadcrumbItem>
			{#each breadcrumbItems as item}
				<BreadcrumbItem href={item.href}>{item.name}</BreadcrumbItem>
			{/each}
		</Breadcrumb>
		<button
			class="flex flex-row items-center gap-4 rounded-md border px-4 py-2"
			aria-label="Dropdown perfil"
		>
			<div
				class="flex aspect-square h-10 flex-col items-center justify-center rounded-lg bg-primary-700 text-white"
			>
				{user.name
					.split(' ')
					.map((name) => name[0])
					.join('')}
			</div>
			<div class="mr-4 flex flex-col items-start">
				<p class="font-semibold">{user.name}</p>
				<p class="text-sm">Sessão expira em: {expiry}</p>
			</div>
			<Icon icon="ic:baseline-keyboard-arrow-down" height="20" />
		</button>
		<Dropdown class="w-64">
			<DropdownItem href="/logout">Sair</DropdownItem>
		</Dropdown>
	</div>
	<div class="flex h-full w-full flex-col gap-4 overflow-scroll bg-white p-6"><slot /></div>
</div>
