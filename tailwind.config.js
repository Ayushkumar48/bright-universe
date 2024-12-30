/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				flipHorizontal: {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				}
			},
			animation: {
				hflip: 'flipHorizontal 0.5s ease-in-out forwards'
			}
		}
	},
	plugins: []
};
