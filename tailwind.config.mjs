/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nprimary: '#0047bb',
				nsecondary: '#3ae9d6',
				//Neuuni Colors
				nyellow: '#ffb229',
				nred: '#ff4a5c',
				npurple: '#7748af',
			},
			animation: {
				'gradient': 'gradient 8s linear infinite',
			},
			keyframes: {
				'gradient': {
					to: { 'background-position': '200% center' },
				}
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
