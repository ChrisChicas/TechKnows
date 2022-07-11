
module.exports = {
  content: [
    "tailwind.config.js",
    "src/components/users/signUpForm.jsx",
    "src/components/articles/MainFeed.js",

  ],
  theme: {
    extend: {
      colors: {
        "clear-sky": "#aadbfa",
      },

      screens: {
        //like you can add extra-extra-small screen as
        'xx': '100px',
        'img': '10px',
        'xxs': '400px',
        // => @media (min-width: 400px) { ... }
  
        'xs': '401px',
        // => @media (min-width: 401px) { ... }
  
        // 'sm': '640px',
        // // => @media (min-width: 640px) { ... }
  
        // 'md': '768px',
        // // => @media (min-width: 768px) { ... }
  
        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: (theme)=>({
        dunes: "url('images.pexels.com/photos/691668/pexels-photo-691668.jpeg')",
        abstract: "url('abstract.png')",
      })
     },
  },
  plugins: [],
};

