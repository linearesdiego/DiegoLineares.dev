/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#030712',
				secondary: '#111827',
				tertiary: '#374151',
				gray400:"#f9fafb",
			},
		},
	},
	plugins: [],
}

