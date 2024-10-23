<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as echarts from 'echarts';
	import { Badge } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let balance = 34245.23;

	interface Rentability {
		value: number;
		style: 'positive' | 'negative';
	}

	const rentability: Rentability = {
		value: 13.45,
		style: 'positive'
	};

	let formattedRentability = rentability.value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});

	const styles = {
		positive: {
			color: 'text-secondary-500',
			icon: 'material-symbols:arrow-upward'
		},
		negative: {
			color: 'text-red-500',
			icon: 'material-symbols:arrow-downward'
		}
	};

	let chartContainer: HTMLDivElement;

	// Function to shuffle an array
	function shuffleArray(array: number[]): number[] {
		for (let i = 9 - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	onMount(() => {
		var chart = echarts.init(chartContainer, null, {renderer: 'svg', width: '800'});
		const originalData = [25, 14, 23, 35, 10, 8, 11, 29, 14, 15, 16, 18, 20, 22, 24, 26, 28];
		const shuffledData = shuffleArray(originalData); // Shuffle the data

		chart.setOption({
			xAxis: {
				data: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
			},
			color: ['#78bc61', '#a8e174', '#d3e49a', '#d0648a', '#f58db2', '#f2b3c9'],
			yAxis: {},
			series: [
				{
					data: shuffledData, // Use shuffled data
					type: 'line',
					smooth: true,
					areaStyle: {
						color: '#BEE6B1',
						opacity: 0.5
					}
				}
			]
		});
	});

</script>

<div class="flex flex-col p-4 border rounded-lg w-full">
  <div class="flex flex-row gap-2">
    <p class="text-lg font-semibold">Visão geral</p>
    <Badge large class={`gap-1 border bg-white`} rounded>
			<div class={`flex flex-row items-center gap-[2px] ${styles[rentability.style].color}`}>
			  <p class="font-semibold">{formattedRentability}</p>
			  <Icon icon={styles[rentability.style].icon} class="mb-[1px]" />
		  </div>
		</Badge>
  </div>
  <div bind:this={chartContainer} class="grow h-[400px]"></div>
</div>
