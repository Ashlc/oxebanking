import flowbitePlugin from 'flowbite/plugin';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#A17C6B',
					200: '#6A5D5D',
					300: '#4E4444',
					400: '#332B2B',
					500: '#211E1E',
					600: '#181515',
					700: '#121010',
					800: '#0E0C0C',
					900: '#0A0808'
				},
				secondary: {
					100: '#E4FFDB',
					200: '#BEE6B1',
					300: '#78BC61',
					400: '#69AC53',
					500: '#4C803B',
					600: '#39622D',
					700: '#294521',
					800: '#1E3118',
					900: '#142111'
				},
				neutral: {
					100: '#FFFDFA',
					200: '#FFF9F3',
					300: '#F2EBE5',
					400: '#ECDBCA',
					500: '#E8D2BC',
					600: '#A6A6A6',
					700: '#787878',
					800: '#4A4A4A',
					900: '#1C1C1C'
				}
			},
			borderColor: {
				DEFAULT: '#e5e7eb'
			}
		}
	},
	plugins: [flowbitePlugin]
} as Config;
