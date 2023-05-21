/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			handwriting: ['Nothing You Could Do', 'cursive'],
		},
		extend: {
			colors: {
				primary: '#00e8fc',
				secondary: '#dda0dd',
				parrafo: '#fafafa',
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			}
		},
	},
	plugins: [],
}

