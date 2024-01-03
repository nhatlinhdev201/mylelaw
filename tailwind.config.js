module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        black_1: '#171717',
        gray_1: '#939393',
        yellow_1: '#cea525',
        white_2 : 'rgba(255,255,255,.7)',
        white_1 : '#fff'        
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities, theme }) {
      const colors = theme('colors');
      let utilities = {};
      Object.keys(colors).forEach((name) => {
        utilities[`.bg-${name}`] = { backgroundColor: colors[name] };
        utilities[`.text-${name}`] = { color: colors[name] };
      });
      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};
