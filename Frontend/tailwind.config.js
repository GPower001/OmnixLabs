// import daisyui from 'daisyui'
//   /** @type {import('tailwindcss').Config} */
//   export default {
//     darkMode: 'class',
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//       theme: {
//       extend: {
//          fontFamily: {
//            montserrat: ["Montserrat", "sans-serif"]
//          }
//       },
//     },
//     plugins: [daisyui],
//     daisyui: {
//       themes: ['light']
//     }
//   };


import daisyui from 'daisyui'
  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
      theme: {
      extend: {
         fontFamily: {
           montserrat: ["Montserrat", "sans-serif"]
         }
      },
    },
    plugins: [daisyui],
    daisyui: {
      themes: ['light', 'dark'], // Enable both light and dark themes
      darkTheme: "dark", // Name of dark theme
      base: true,
      styled: true,
      utils: true,
    }
  };