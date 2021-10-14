module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			width: {
				'1/8': '12.5%',
				'2/8': '25%',
				'3/8': '37.5%',
				'4/8': '50%',
				'5/8': '67.5%',
				'6/8': '75%',
				'7/8' : '87.5%',
				'1/7': '14.2857%',
				'2/7': '28.5714%',
				'3/7': '42.8571%',
				'4/7': '57.1428%',
				'5/7': '71.4285%',
				'6/7': '85.7142%',
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
