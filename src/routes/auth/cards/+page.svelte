<script lang="ts">
	import Layout from '@/components/Layout.svelte';
</script>

<Layout
	root="Início"
	breadcrumbItems={[
		{
			name: 'Cartões',
			href: '/auth/cards'
		}
	]}
	startIcon="ic:outline-explore"
>
	<p>teste</p>
</Layout>
