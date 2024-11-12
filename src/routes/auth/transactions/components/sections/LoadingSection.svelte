<script>
	let className = '';
	export { className as class };
</script>

<div class={'relative flex h-96 w-full flex-col overflow-visible' + className}>
	<img class="absolute left-8 top-8" src="/src/assets/loading/lua0.svg" alt="lua" />
	<img class="absolute right-8 top-6" src="/src/assets/loading/sol.svg" alt="sol" />
	<img
		src="/src/assets/loading/cacto.svg"
		alt="cacto"
		class="absolute left-1/2 top-[calc(50%-12.5px)] h-36 -translate-x-1/2 -translate-y-1/2"
	/>
	<img
		class="absolute bottom-1/3 left-1/2 h-[13.48px] w-[120%] -translate-x-1/2 overflow-hidden"
		src="/src/assets/loading/ground.svg"
		alt="ground"
	/>
	<img
		class="absolute -bottom-4 left-1/2 h-[150px] w-[120%] -translate-x-1/2 overflow-hidden"
		src="/src/assets/loading/particles.svg"
		alt="particles"
	/>
</div>

<style></style>
