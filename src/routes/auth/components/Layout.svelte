<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    export let breadcrumbItems: string[] = [];
    export let root: string = '';
    export let startIcon: string = '';
</script>

<div class="flex flex-col gap-4 bg-white w-full h-full border rounded-xl">
    <div class="flex flex-row justify-between items-center h-[105px] px-10 border-b">
        <Breadcrumb>
            <BreadcrumbItem href="#" home>
                <Icon icon={startIcon} height="20" class="mr-2" slot="icon"/>
                {root}
            </BreadcrumbItem>
            {#each breadcrumbItems as item}
                <BreadcrumbItem href="#">{item}</BreadcrumbItem>
            {/each}
        </Breadcrumb>
        <div class="border rounded-sm p-4">Fernando Marques</div>
    </div>
    <div class="flex flex-col gap-4 bg-white w-full h-full p-4"><slot/></div>
</div>