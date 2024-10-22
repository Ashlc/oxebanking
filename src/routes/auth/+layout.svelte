<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import OxebankingLogo from '../../components/OxebankingLogo.svelte';
	import SidebarButton from './components/SidebarButton.svelte';
	let active = 'home';
	const breadcrumbItems = $page.url.pathname
		.split('/')
		.filter((item) => item !== '' && item !== 'auth');
	console.log(breadcrumbItems);
</script>

<div class="bg-neutral-200 h-screen w-screen flex flex-row items-center">
	<div class="w-[300px] h-full p-6 pt-16 flex flex-col justify-between items-center">
		<div class="flex flex-col w-full items-center gap-14">
			<OxebankingLogo />
			<div class="flex flex-col gap-6 items-center w-full">
				<SidebarButton active={active === 'home'}
					><Icon icon="ic:outline-explore" height="20" class="mr-2" /> Início</SidebarButton
				>
				<SidebarButton active={active === 'transactions'}
					><Icon icon="ic:outline-attach-money" height="20" class="mr-2" /> Transações</SidebarButton
				>
				<SidebarButton active={active === 'investments'}
					><Icon icon="ic:outline-trending-up" height="20" class="mr-2" /> Investimentos</SidebarButton
				>
				<SidebarButton active={active === 'loans'}
					><Icon icon="ic:outline-account-balance" height="20" class="mr-2" /> Empréstimos</SidebarButton
				>
			</div>
		</div>
		<div class="flex flex-col gap-4 items-center w-full border-t pt-6">
			<SidebarButton
				><Icon icon="ic:outline-support" height="20" class="mr-2" /> Central de Ajuda</SidebarButton
			>
			<SidebarButton
				><Icon icon="ic:outline-settings" height="20" class="mr-2" /> Configurações</SidebarButton
			>
		</div>
	</div>
	<div class="h-full w-full pl-0 p-1">
		<slot />
	</div>
</div>
