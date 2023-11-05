/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      spacing: {
        '17' : '4.43rem',
        '25' : '8.22rem',
        '98' : '23.3rem',
        '99' : '26rem',
        '100' : '56rem'

      },

      fontFamily :{
		'pop' : ['Poppins', 'sans-serif'],
    'philosopher' : ['Philosopher', 'sans-serif'],
    montserrat: ['Montserrat', 'sans-serif'],
    'lato' : ['Lato', 'sans-serif']
	},
  fontWeight: {
    bold: '600', // Add the bold variant
  },
  height:{
    '100' : '35rem',
    '11' : '2.75rem',
    '27' : '8rem',
    '120' : '80rem',
    '200' : '180rem',
    '300' : '240rem',
  },
  width:{
    '100' : '41rem',
    '102' : '45rem',
    '120' : '75rem',
    '115' : '60rem',
    '86' : '21rem',
    '11' : '2.7rem',
    '70' : '21.5rem',
    '97' : '25.3rem',
    '110' : '73rem'
  }, 
  screens: {
    // 'sm': '300px',  // Target iPhone 5 screen size and smaller
    // 'md': '375px',  // Target iPhone 6/7/8 screen size and smaller
    // 'lg': '500px',  // Target iPhone 6/7/8 Plus screen size and smaller
    'sm': '400px',  // Small screens (mobile)
    'md': '705px',  // Medium screens (tablet)
    'lg': '1100px', // Large screens (desktop)
    'xl': '1280px', // Extra-large screens (larger desktops)
  },

	},
  },
  plugins: [],
}
