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
			textColor: {
				DEFAULT: '#332B2B'
			},
			colors: {
				primary: {
					100: '#E4FFDB',
					200: '#BEE6B1',
					300: '#addb9e',
					400: '#96c985',
					500: '#BEE6B1',
					600: '#78BC61',
					700: '#69AC53', // Primary Flowbite button
					800: '#3e6931',
					900: '#2b5c1c'
				},
				secondary: {
					100: '#A17C6B',
					200: '#78625D',
					300: '#53443F',
					400: '#332B2B',
					500: '#211E1E',
					600: '#181515',
					700: '#121010',
					800: '#0E0C0C',
					900: '#0A0808'
				},
				neutral: {
					100: '#FFFDFA',
					200: '#FFF9F3',
					300: '#F2EBE5',
					400: '#F2E4D5',
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
