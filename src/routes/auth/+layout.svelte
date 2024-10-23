<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { derived } from 'svelte/store';
	import OxebankingLogo from '../../components/OxebankingLogo.svelte';
	import SidebarButton from './components/SidebarButton.svelte';

	let active = derived(page, ($page) => $page.url.pathname.split('/')[2]);
	console.log(active);
</script>

<div class="flex h-screen w-screen flex-row items-center bg-neutral-200">
	<div class="flex h-full w-[300px] flex-col items-center justify-between p-6 pt-16">
		<div class="flex w-full flex-col items-center gap-14">
			<OxebankingLogo />
			<div class="flex w-full flex-col items-center gap-6">
				<SidebarButton active={$active === 'home'} href="/auth/home"
					><Icon icon="ic:outline-explore" height="20" class="mr-2" /> Início</SidebarButton
				>
				<SidebarButton active={$active === 'transactions'} href="/auth/transactions"
					><Icon icon="ic:outline-attach-money" height="20" class="mr-2" /> Transações</SidebarButton
				>
				<SidebarButton active={$active === 'investments'} href="/auth/investments"
					><Icon icon="ic:outline-trending-up" height="20" class="mr-2" /> Investimentos</SidebarButton
				>
				<SidebarButton active={$active === 'loans'} href="/auth/loans"
					><Icon icon="ic:outline-account-balance" height="20" class="mr-2" /> Empréstimos</SidebarButton
				>
			</div>
		</div>
		<div class="flex w-full flex-col items-center gap-4 border-t pt-6">
			<SidebarButton href="/auth/help"
				><Icon icon="ic:outline-support" height="20" class="mr-2" /> Central de Ajuda</SidebarButton
			>
			<SidebarButton href="/auth/settings"
				><Icon icon="ic:outline-settings" height="20" class="mr-2" /> Configurações</SidebarButton
			>
		</div>
	</div>
	<div class="h-full w-full p-1 pl-0">
		<slot />
	</div>
</div>
