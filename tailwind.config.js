/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
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
				secondary: '#0077b6',
				parrafo: '#fafafa',
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			}
		},
	},
	plugins: [],
}

