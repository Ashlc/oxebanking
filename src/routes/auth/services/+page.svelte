<script lang="ts">
	import Layout from '../../../components/Layout.svelte';
	import Consortium from './Consortium.svelte';
	import Exchange from './Exchange.svelte';
	import Insurance from './Insurance.svelte';
</script>

<Layout root="Início" startIcon="ic:outline-explore" breadcrumbItems={['Serviços']}>
	<div class="flex flex-col gap-8">
		<Exchange />
		<Insurance />
		<Consortium />
	</div>
</Layout>
