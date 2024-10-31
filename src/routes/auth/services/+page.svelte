<script lang="ts">
	import Layout from '../../../components/Layout.svelte';
	import type { ConsortiumType } from '../../../types/Consortium';
	import type { InsuranceType } from '../../../types/Insurance';
	import ConsortiumModal from './components/ConsortiumModal.svelte';
	import InsuranceModal from './components/InsuranceModal.svelte';
	import Consortium from './Consortium.svelte';
	import Exchange from './Exchange.svelte';
	import Insurance from './Insurance.svelte';

	let openModal = [false, false, false];

	const onClose = () => {
		openModal = [false, false];
	};

	const handleOpenModal = (index: number) => {
		openModal = [false, false];
		openModal[index] = true;
	};

	let selectedConsortium: ConsortiumType | null = null;
	let selectedInsurance: InsuranceType | null = null;

	const selectConsortium = (consortium: ConsortiumType) => {
		selectedConsortium = consortium;
	};

	const selectInsurance = (insurance: InsuranceType) => {
		selectedInsurance = insurance;
	};
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Serviços']}>
	<div class="flex flex-col gap-16">
		<Exchange />
		<Insurance openModal={handleOpenModal} onSelect={selectInsurance} />
		<Consortium openModal={handleOpenModal} onSelect={selectConsortium} />
	</div>
	<ConsortiumModal bind:openModal={openModal[0]} {onClose} consortium={selectedConsortium} />
	<InsuranceModal bind:openModal={openModal[1]} {onClose} insurance={selectedInsurance} />
</Layout>
