module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}


// module.exports = {
//   content: ['./src/**/*.{html,js,ts}'],
//   plugins: [require("@tailwindcss"), require("@tailwindcss/typography"), require("daisyui"),],

//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: "",
//     themes: ["dracula"],
//   },
//   // daisyui: {
//   //   themes: [
//   //     "light",
//   //     "dark",
//   //     "cupcake",
//   //     "bumblebee",
//   //     "emerald",
//   //     "corporate",
//   //     "synthwave",
//   //     "retro",
//   //     "cyberpunk",
//   //     "valentine",
//   //     "halloween",
//   //     "garden",
//   //     "forest",
//   //     "aqua",
//   //     "lofi",
//   //     "pastel",
//   //     "fantasy",
//   //     "wireframe",
//   //     "black",
//   //     "luxury",
//   //     "dracula",
//   //     "cmyk",
//   //     "autumn",
//   //     "business",
//   //     "acid",
//   //     "lemonade",
//   //     "night",
//   //     "coffee",
//   //     "winter",
//   //   ],
//   // },
// };
