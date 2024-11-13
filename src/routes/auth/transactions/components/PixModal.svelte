<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ArrowKeyLeft, Button } from 'flowbite-svelte';

	import OxeBankingLogo from '@/components/OxebankingLogo.svelte';
	import PixIcon from '@/assets/icons/pix.svelte';

	import PixPayment from './PixPayment.svelte';

	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import PaymentSection from './sections/PaymentSection.svelte';
	import LoadingSection from './sections/LoadingSection.svelte';
	import SuccessSection from './sections/SuccessSection.svelte';

	let key = '';
	let setKey: (key: string) => void = () => {};
	let value = '';
	let setValue: (value: string) => void = () => {};

	const actions = [
		{
			icon: 'material-symbols:send-money',
			label: 'Pagar'
		},
		{
			icon: 'material-symbols:place-item',
			label: 'Depositar'
		},
		{
			icon: 'material-symbols:calendar-clock-outline',
			label: 'Agendar'
		},
		{
			icon: 'mdi:mixer-settings',
			label: 'Limites'
		},
		{
			icon: 'material-symbols:favorite-outline',
			label: 'Favoritos'
		}
	];

	const favorites = [
		{
			name: 'João da Silva',
			key: '1234567890'
		}
	];

	interface Section {
		header: {
			title?: string;
			icon?: any;
			canClose?: boolean;
			component?: any;
			action?: () => void;
		};
		content: any;
		props?: any;
		footer?: {
			actions: {
				label: string;
				icon: string;
				onClick: () => void;
			}[];
		};
	}

	let activeSection = 0;
	let contentHeight = 0;

	const handleBack = () => {
		activeSection--;
	};

	const handleContinue = () => {
		activeSection++;
		if (activeSection === 2) {
			setTimeout(() => {
				activeSection++;
			}, 2500);
		}
	};

	const paymentSection = {
		header: {
			title: 'Valor a pagar',
			icon: 'ic:arrow-back',
			canClose: false,
			action: handleBack
		},
		content: PaymentSection,
		footer: {
			actions: [
				{
					label: 'Continuar',
					icon: 'ic:arrow-forward',
					onClick: handleContinue
				}
			]
		},
		props: { value, setValue }
	} as Section;

	const loadingSection = {
		header: {
			title: 'Processando...',
			icon: null,
			canClose: false
		},
		content: LoadingSection
	} as Section;

	const successSection = {
		header: {
			component: OxeBankingLogo,
			canClose: true
		},
		content: SuccessSection
	} as Section;

	const pixPaymentSections = [
		{
			header: {
				title: 'Pagar com PIX',
				icon: PixIcon,
				canClose: true
			},
			content: PixPayment,
			props: { key, setKey, favorites },
			footer: {
				actions: [
					{
						label: 'Continuar',
						icon: 'ic:arrow-forward',
						onClick: handleContinue
					}
				]
			}
		},
		paymentSection,
		loadingSection,
		successSection
	] as Section[];
</script>

<Dialog.Root
	onOpenChange={(state) => {
		if (state === false) {
			setTimeout(() => {
				activeSection = 0;
			}, 300);
		}
	}}
>
	{#each actions as action}
		<Dialog.Trigger
			class="flex aspect-square w-1/4 flex-col items-center justify-center gap-2 rounded-lg border bg-neutral-200 transition-all hover:bg-neutral-300 focus:ring focus:!ring-secondary-100 active:bg-neutral-400"
		>
			<Icon icon={action.icon} height="32" />
			{action.label}
		</Dialog.Trigger>
	{/each}
	<Dialog.Content>
		<div
			class="dialog-content"
			style="transition: height 0.3s ease;"
			style:height={`${contentHeight}px`}
		>
			<div bind:clientHeight={contentHeight} class="flex flex-col items-center justify-start gap-9">
				{#each pixPaymentSections as section, i}
					{#if i === activeSection}
						<Dialog.Header>
							<Dialog.Title icon={section.header.icon} action={section.header.action}>
								{#if section.header.component}
									<svelte:component this={section.header.component} />
								{:else}
									{section.header.title}
								{/if}
							</Dialog.Title>
						</Dialog.Header>

						<Dialog.Holder>
							<svelte:component this={section.content} {...section.props} />
						</Dialog.Holder>
						{#if section.footer}
							<Dialog.Footer>
								{#each section.footer.actions as action}
									<Button class="w-full gap-2 transition-all" size="lg" on:click={action.onClick}>
										{action.label}
										<Icon icon={action.icon} height="20" />
									</Button>
								{/each}
							</Dialog.Footer>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>

<style>
	.dialog-content {
		position: relative;
		overflow: hidden;
		min-height: fit-content;
		transition: height 0.3s ease;
	}
</style>
