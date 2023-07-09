/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-manrope)'],
				serif: ['var(--font-fraunces)'],
			},
			colors: {
				darkPurple: '#24053E',
				eucaplyptus: '#44FFA1',
				davysGrey: '#584D62',
				ghostWhite: '#FCF8FF',
			},
			backgroundImage: {
				heroLeft: 'url("/images/bg-pattern-1.svg")',
				heroRight: 'url("/images/bg-pattern-2.svg")',
				heroBottom: 'url("/images/bg-pattern-3.svg")',
			},
		},
	},
	plugins: [],
}
